import { create } from 'zustand';

export type Parcel = {
  properties: Record<string, any>;
  geometry: any;
};

export type ParcelStoreProps = {
  selectedParcel: Parcel | null;
  selectedParcelId: string | number | null;

  setParcel: (parcel: Parcel, id: string | number) => void;
  setSelectedParcelId: (id: string | number | null) => void;
  clearParcel: () => void;
};

export const useParcelStore = create<ParcelStoreProps>((set) => ({
  selectedParcel: null,
  selectedParcelId: null,

  setParcel: (parcel, id) => {
    set({
      selectedParcel: parcel,
      selectedParcelId: id,
    });
  },
  setSelectedParcelId: (id) => set({ selectedParcelId: id }),
  clearParcel: () => {
    set({
      selectedParcel: null,
      selectedParcelId: null,
    });
  },
}));
