import { Map } from 'maplibre-gl';

export function useMapPadding(map: Map | null, isOpen: boolean) {
  if (!map) return;

  map.easeTo({
    padding: {
      top: 30,
      bottom: 30,
      left: isOpen ? 400 : 100,
      right: 30,
    },
    duration: 300,
  });
}
