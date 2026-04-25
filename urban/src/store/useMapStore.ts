import { LngLatBounds } from 'maplibre-gl';
import { create } from 'zustand';

interface MapStore {
  latitude: string;
  longitude: string;
  bounds: LngLatBounds | null;
  
  setLatitude: (coord: string) => void;
  setLongitude: (coord: string) => void;
  setBounds: (bounds: LngLatBounds) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  latitude: '',
  longitude: '',
  bounds: null,

  setLatitude: (coord: string) => set({ latitude: coord }),
  setLongitude: (coord: string) => set({ longitude: coord }),
  setBounds: (bounds) => set({ bounds }),
}));
