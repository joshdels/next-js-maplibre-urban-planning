import { LngLatBounds } from 'maplibre-gl';

export function getBounds(data: any) {
  const bounds = new LngLatBounds();

  const addCoords = (coords: any) => {
    if (Array.isArray(coords) && typeof coords[0] === 'number') {
      bounds.extend(coords);
    } else if (Array.isArray(coords)) {
      coords.forEach(addCoords);
    }
  };

  data.features.forEach((f: any) => {
    if (f.geometry) addCoords(f.geometry.coordinates);
  });

  return bounds;
}
