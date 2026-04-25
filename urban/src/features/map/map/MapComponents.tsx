'use client';

import { useRef, useEffect, useState } from 'react';
import maplibregl, { Map, LngLatBounds } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './Map.module.css';

import MapControls from '../../../shared/components/map/MapControls';
import { useTabStore } from '@/store/useTabStore';
import { useMapStore } from '@/store/useMapStore';

export default function MapComponent() {
  const { isOpen } = useTabStore();
  const { setLatitude, setLongitude } = useMapStore();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const boundsRef = useRef<LngLatBounds | null>(null);

  const [lng] = useState(-74.5);
  const [lat] = useState(40);
  const [zoom] = useState(10);

  // =========================
  // 1. INIT MAP + FIT ONCE
  // =========================
  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          'arcgis-tiles': {
            type: 'raster',
            tiles: [
              'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'arcgis-layer',
            type: 'raster',
            source: 'arcgis-tiles',
          },
        ],
      },
    });

    map.current.on('load', async () => {
      try {
        const res = await fetch('/sample_web.geojson');
        const data = await res.json();

        map.current?.addSource('layer-data', {
          type: 'geojson',
          data,
        });

        map.current?.addLayer({
          id: 'my-data-layer',
          type: 'line',
          source: 'layer-data',
          minzoom: 12,
          paint: {
            'line-color': 'orange',
            'line-width': 2,
          },
        });

        // =========================
        // BUILD BOUNDS
        // =========================
        const bounds = new LngLatBounds();
        boundsRef.current = bounds;

        data.features.forEach((feature: any) => {
          const geom = feature.geometry;
          if (!geom) return;

          const addCoords = (coords: any) => {
            if (
              Array.isArray(coords) &&
              typeof coords[0] === 'number' &&
              typeof coords[1] === 'number'
            ) {
              bounds.extend(coords);
            } else if (Array.isArray(coords)) {
              coords.forEach(addCoords);
            }
          };

          addCoords(geom.coordinates);
        });

        // =========================
        // FIT ONCE ONLY (IMPORTANT)
        // =========================
        if (!bounds.isEmpty()) {
          map.current?.fitBounds(bounds, {
            padding: {
              top: 50,
              bottom: 30,
              left: 100,
              right: 30,
            },
            duration: 0,
          });
        }
      } catch (err) {
        console.error('GeoJSON error:', err);
      }
    });

    map.current.on('mousemove', (e) => {
      setLatitude(e.lngLat.lat.toFixed(4));
      setLongitude(e.lngLat.lng.toFixed(4));

      console.log(e.lngLat.lng.toFixed(4));
      console.log(e.lngLat.lat.toFixed(4));
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [lng, lat, zoom]);

  useEffect(() => {
    if (!map.current) return;

    map.current.easeTo({
      padding: {
        top: 50,
        bottom: 30,
        left: isOpen ? 400 : 100,
        right: 30,
      },
      duration: 300,
    });
  }, [isOpen]);

  return (
    <>
      <div className={styles['map-container']} ref={mapContainer} />

      <MapControls
        onZoomIn={() => map.current?.zoomIn()}
        onZoomOut={() => map.current?.zoomOut()}
      />
    </>
  );
}
