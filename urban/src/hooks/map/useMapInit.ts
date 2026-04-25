import maplibregl, { Map } from 'maplibre-gl';

export function useMapInit(
  container: HTMLDivElement | null,
  mapRef: React.RefObject<Map | null>,
  lng: number,
  lat: number,
  zoom: number
) {
  if (mapRef.current || !container) return;

  mapRef.current = new maplibregl.Map({
    container,
    center: [lng, lat],
    zoom,
    attributionControl: false,
    style: {
      version: 8,
      sources: {
        'arcgis-tiles': {
          type: 'raster',
          tiles: [
            'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          ],
          tileSize: 256,
        },
      },
      layers: [
        {
          id: 'arcgis-layer',
          type: 'raster',
          source: 'arcgis-tiles',
        },
      ],
    },
  });
}
