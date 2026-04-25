import { Map } from 'maplibre-gl';

export function useMapMouse(
  map: Map | null,
  setLatitude: (v: string) => void,
  setLongitude: (v: string) => void
) {
  if (!map) return;

  map.on('mousemove', (e) => {
    setLatitude(e.lngLat.lat.toFixed(4));
    setLongitude(e.lngLat.lng.toFixed(4));
  });
}
