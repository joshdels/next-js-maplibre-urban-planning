import maplibregl, { Map } from 'maplibre-gl';

export function zoomToFeature(map: Map, feature: any) {
  const coords = feature.geometry.coordinates;

  const bounds = new maplibregl.LngLatBounds();

  const add = (c: any) => {
    if (typeof c[0] === 'number') {
      bounds.extend(c as [number, number]);
    } else {
      c.forEach(add);
    }
  };

  add(coords);

  map.fitBounds(bounds, {
    padding: { top: 50, bottom: 50, right: 50, left: 50 },
    duration: 500,
  });
}
