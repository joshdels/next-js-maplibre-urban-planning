import { create } from 'zustand';

interface MapStore {
  latitude: string;
  longitude: string;
  setLatitude: (coord: string) => void;
  setLongitude: (coord: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  latitude: "",
  longitude: "",
  setLatitude: (coord: string) => set({ latitude: coord }),
  setLongitude: (coord: string) => set({ longitude: coord }),
}));
