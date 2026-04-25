import { Map } from 'maplibre-gl';
import { useParcelStore } from '@/store/useParcelStore';
import { useTabStore } from '@/store/useTabStore';
import { zoomToFeature } from '@/utils/map/zoomToFeature';

export function useParcelMap(map: Map) {
  const setParcel = useParcelStore.getState().setParcel;
  const clearParcel = useParcelStore.getState().clearParcel;
  const setSelectedParcelId = useParcelStore.getState().setSelectedParcelId;

  const setActiveTab = useTabStore.getState().setActiveTab;
  const setIsOpen = useTabStore.getState().setIsOpen;

  const clearSelection = () => {
    const prevId = useParcelStore.getState().selectedParcelId;

    if (prevId != null) {
      map.setFeatureState(
        { source: 'layer-data', id: prevId },
        { selected: false }
      );
    }

    setSelectedParcelId(null);
    clearParcel();
  };

  const selectParcel = (feature: any) => {
    const id = feature.id;
    if (id == null) return;

    const prevId = useParcelStore.getState().selectedParcelId;

    if (prevId != null && prevId !== id) {
      map.setFeatureState(
        { source: 'layer-data', id: prevId },
        { selected: false }
      );
    }

    map.setFeatureState({ source: 'layer-data', id }, { selected: true });

    setSelectedParcelId(id);

    setParcel(
      {
        properties: feature.properties,
        geometry: feature.geometry,
      },
      id
    );

    setIsOpen(true);
    setActiveTab('overview');
    zoomToFeature(map, feature);
  };

  const onClick = (e: any) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['parcel-fill'],
    });

    if (!features || features.length === 0) {
      clearSelection();
      return;
    }

    const feature = features[0];
    if (!feature) {
      clearSelection();
      return;
    }

    selectParcel(feature);
  };

  map.on('click', onClick);

  return () => {
    map.off('click', onClick);
  };
}
