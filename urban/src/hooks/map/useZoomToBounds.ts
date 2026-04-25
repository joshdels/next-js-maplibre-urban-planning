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
    maxZoom: 18,
  });
}

export function useParcelClick(map: Map) {
  const onClick = (e: any) => {
    const feature = e.features?.[0];
    if (!feature) return;

    const id = feature.id;

    if (id == null) {
      console.warn('Missing feature id');
      return;
    }

    const source = map.getSource('layer-data') as any;

    if (source?._data?.features) {
      for (const f of source._data.features) {
        if (f.id !== id) {
          map.setFeatureState(
            { source: 'layer-data', id: f.id },
            { selected: false }
          );
        }
      }
    }

    map.setFeatureState({ source: 'layer-data', id }, { selected: true });
  };

  map.on('click', 'parcel-fill', onClick);

  return () => {
    map.off('click', 'parcel-fill', onClick);
  };
}
