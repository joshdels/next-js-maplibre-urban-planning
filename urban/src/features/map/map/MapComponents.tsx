'use client';

import { useRef, useEffect } from 'react';
import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './Map.module.css';

import MapControls from '../../../shared/components/map/MapControls';
import { useTabStore } from '@/store/useTabStore';
import { useMapStore } from '@/store/useMapStore';
import { useMapInit } from '@/hooks/map/useMapInit';
import { useGeoJsonLayer } from '@/hooks/map/useGeoJSONlayer';
import { useMapMouse } from '@/hooks/map/useMapMouse';
import { useMapPadding } from '@/hooks/map/usePadding';
import { useZoomToBounds } from '@/hooks/map/useZoomToBounds';

export default function MapComponent() {
  const { isOpen } = useTabStore();
  const { setLatitude, setLongitude, bounds } = useMapStore();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  const lat = 0;
  const lng = 0;
  const zoom = 2;

  const handleZoomToBounds = () => {
    useZoomToBounds(map, bounds, isOpen);
  };

  useGeoJsonLayer(map.current);

  useEffect(() => {
    useGeoJsonLayer;
    useMapInit(mapContainer.current, map, lng, lat, zoom);
  }, []);

  useEffect(() => {
    useMapMouse(map.current, setLatitude, setLongitude);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    const nav = new maplibregl.NavigationControl({
      showCompass: true,
      showZoom: false,
    });

    map.current.addControl(nav, 'top-right');

    return () => {
      map.current?.removeControl(nav);
    };
  }, []);

  useEffect(() => {
    useMapPadding(map.current, isOpen);
  }, [isOpen]);

  return (
    <>
      <div ref={mapContainer} className={styles['map-container']} />
      <MapControls
        onZoomIn={() => map.current?.zoomIn()}
        onZoomOut={() => map.current?.zoomOut()}
        onZoomToBounds={handleZoomToBounds}
      />
    </>
  );
}
