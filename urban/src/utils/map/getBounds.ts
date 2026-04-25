import { LngLatBounds } from 'maplibre-gl';

export function getBounds(data: any) {
  const bounds = new LngLatBounds();

  const extend = (coord: any) => {
    if (!Array.isArray(coord)) return;

    if (typeof coord[0] === 'number' && typeof coord[1] === 'number') {
      bounds.extend(coord);
      return;
    }

    coord.forEach(extend);
  };

  data.features.forEach((feature: any) => {
    const geom = feature.geometry;
    if (!geom?.coordinates) return;

    extend(geom.coordinates);
  });

  return bounds;
}
