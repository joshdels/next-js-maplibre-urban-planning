import { Map } from 'maplibre-gl';
import { getBounds } from '@/utils/getBounds';

export async function useGeoJsonLayer(map: Map, setBounds: (b: any) => void) {
  if (map.getSource('layer-data')) {
    console.log('[GeoJSON] source already exists');
    return;
  }

  const res = await fetch('/sample_web.geojson');
  const data = await res.json();

  map.addSource('layer-data', {
    type: 'geojson',
    data,
  });

  map.addLayer({
    id: 'parcel-fill',
    type: 'fill',
    source: 'layer-data',
    paint: {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0.01,
    },
  });

  map.addLayer({
    id: 'parcel-outline',
    type: 'line',
    source: 'layer-data',
    paint: {
      'line-color': 'orange',
      'line-width': 2,
    },
  });

  const bounds = getBounds(data);

  if (!bounds.isEmpty()) {
    setBounds(bounds);

    requestAnimationFrame(() => {
      map.fitBounds(bounds, {
        padding: 30,
        duration: 50,
      });
    });
  }
}
