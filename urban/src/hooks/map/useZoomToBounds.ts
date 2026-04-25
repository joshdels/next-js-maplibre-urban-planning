import { LngLatBounds, Map } from 'maplibre-gl';

export function useZoomToBounds(
  mapRef: React.RefObject<Map | null>,
  bounds: LngLatBounds | null,
  isOpen: boolean
) {
  if (!mapRef.current || !bounds) return;

  mapRef.current.fitBounds(bounds, {
    padding: {
      top: 30,
      bottom: 30,
      left: isOpen ? 100 : 30,
      right: 30,
    },
    duration: 200,
  });
}
