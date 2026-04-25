'use client';

import { useRef, useEffect, useState } from 'react';
import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './Map.module.css';

import MapControls from '@/shared/components/map/MapControls';
import { useTabStore } from '@/store/useTabStore';
import { useMapStore } from '@/store/useMapStore';

import { useMapInit } from '@/hooks/map/useMapInit';
import { useGeoJsonLayer } from '@/hooks/map/useGeoJSONlayer';
import { useMapMouse } from '@/hooks/map/useMapMouse';
import { useMapPadding } from '@/hooks/map/usePadding';
import { useZoomToBounds } from '@/hooks/map/useZoomToBounds';
import { useParcelMap } from '@/hooks/map/useMapParcel';

export default function MapComponent() {
  const { isOpen } = useTabStore();
  const { setLatitude, setLongitude, bounds, setBounds } = useMapStore();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  const lat = 0;
  const lng = 0;
  const zoom = 2;

  const handleZoomToBounds = () => {
    if (!map.current) return;
    useZoomToBounds(map, bounds, isOpen);
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    useMapInit(mapContainer.current, map, lng, lat, zoom);

    const waitForMap = () => {
      if (!map.current) {
        requestAnimationFrame(waitForMap);
        return;
      }

      const mapInstance = map.current;

      useGeoJsonLayer(mapInstance, setBounds);
      useMapMouse(mapInstance, setLatitude, setLongitude);
      useParcelMap(mapInstance);
      useMapPadding(mapInstance, isOpen);

      const nav = new maplibregl.NavigationControl({
        showCompass: true,
        showZoom: false,
      });

      mapInstance.addControl(nav, 'top-right');
    };

    waitForMap();

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;
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
