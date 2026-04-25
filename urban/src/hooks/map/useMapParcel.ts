import { Map } from 'maplibre-gl';
import { useParcelStore } from '@/store/useParcelStore';
import { useTabStore } from '@/store/useTabStore';

export function useMapParcel(map: Map) {
  const setActiveTab = useTabStore.getState().setActiveTab;
  const setIsOpen = useTabStore.getState().setIsOpen;

  const setParcel = useParcelStore.getState().setParcel;
  const clearParcel = useParcelStore.getState().clearParcel;

  const onClick = (e: any) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['parcel-fill'],
    });

    if (!features || features.length === 0) {
      clearParcel();
      return;
    }

    const feature = features[0];

    if (!feature) {
      clearParcel();
      return;
    }

    const parcel = {
      properties: feature.properties,
      geometry: feature.geometry,
    };

    setParcel(parcel);

    setIsOpen(true);
    setActiveTab('overview');


  };

  map.on('click', onClick);

  return () => {
    map.off('click', onClick);
  };
}
