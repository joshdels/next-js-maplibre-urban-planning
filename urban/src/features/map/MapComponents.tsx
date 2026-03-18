// components/Map.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./Map.module.css";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lng] = useState(-74.5);
  const [lat] = useState(40);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return;

    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
    };
  }, [lng, lat, zoom]);

  return <div className={styles["map-container"]} ref={mapContainer} />;
};

export default MapComponent;
