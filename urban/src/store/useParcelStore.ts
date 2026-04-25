import { create } from 'zustand';

export type ParcelStoreProps = {
  selectedParcel: {
    properties: Record<string, any>;
    geometry: any;
  } | null;

  setParcel: (parcel: {
    properties: Record<string, any>;
    geometry: any;
  }) => void;

  clearParcel: () => void;
};

export const useParcelStore = create<ParcelStoreProps>((set) => ({
  selectedParcel: null,

  setParcel: (parcel) => {
    set({
      selectedParcel: parcel,
    });
  },

  clearParcel: () => {
    set({
      selectedParcel: null,
    });
  },
}));
