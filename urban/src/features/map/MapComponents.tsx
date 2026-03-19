"use client";

import { useRef, useEffect, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./Map.module.css";

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lng] = useState(-74.5);
  const [lat] = useState(40);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return;

    if (!mapContainer.current) return;

    // map.current = new maplibregl.Map({
    //   container: mapContainer.current,
    //   style:
    //     "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
    //   center: [lng, lat],
    //   zoom: zoom,
    //   attributionControl: false,
    // });

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          "arcgis-tiles": {
            type: "raster",
            tiles: [
              "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "arcgis-layer",
            type: "raster",
            source: "arcgis-tiles",
          },
        ],
      },
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
    };
  }, [lng, lat, zoom]);

  return <div className={styles["map-container"]} ref={mapContainer} />;
}
