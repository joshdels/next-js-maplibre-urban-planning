import { useState } from 'react';
import { Map } from 'maplibre-gl';
import { getBounds } from '@/utils/map/getBounds';

export async function useGeoJsonLayer(map: Map, setBounds: (b: any) => void) {
  if (map.getSource('layer-data')) {
    return;
  }

  const res = await fetch('/sample_web.geojson');
  const data = await res.json();

  map.addSource('layer-data', {
    type: 'geojson',
    promoteId: 'id',
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
    id: 'parcel-line',
    type: 'line',
    source: 'layer-data',
    paint: {
      'line-color': [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        '#1e7ee0',
        '#ff8c00',
      ],
      'line-width': [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        4,
        2,
      ],
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
