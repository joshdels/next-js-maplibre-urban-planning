import { create } from 'zustand';

interface NavStoreProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  handleNavClick: (nav: string) => void;
}

export const useNavStore = create<NavStoreProps>((set) => ({
  activeNav: 'Parcel Map',
  setActiveNav: (nav: string) => set({ activeNav: nav }),
  handleNavClick: (nav) =>
    set((state) => ({
      activeNav: state.activeNav === nav ? '' : nav,
    })),
}));
