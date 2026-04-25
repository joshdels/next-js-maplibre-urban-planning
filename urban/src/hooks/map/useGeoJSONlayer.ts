import { Map } from 'maplibre-gl';
import { getBounds } from '@/utils/getBounds';
import { useMapStore } from '@/store/useMapStore';
import { useEffect } from 'react';

export function useGeoJsonLayer(map: Map | null) {
  const { setBounds } = useMapStore();

  useEffect(() => {
    if (!map) return;

    const run = async () => {
      const res = await fetch('/sample_web.geojson');
      const data = await res.json();

      if (map.getSource('layer-data')) return;

      map.addSource('layer-data', {
        type: 'geojson',
        data,
      });

      map.addLayer({
        id: 'my-data-layer',
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
    };

    if (map.isStyleLoaded()) {
      run();
    } else {
      map.once('load', run);
    }

    return () => {
      map.off('load', run);
    };
  }, [map, setBounds]);
}
