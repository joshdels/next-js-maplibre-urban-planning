import { create } from 'zustand';

interface TabStore {
  activeTab: string;
  isOpen: boolean;
  setActiveTab: (tab: string) => void;
  setIsOpen: (status: boolean) => void;
  handleTabClick: (tab: string) => void;
  handleClose: () => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '',
  isOpen: false,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  setIsOpen: (status: boolean) => set({ isOpen: status }),

  handleTabClick: (tab: string) =>
    set((state) => {
      console.log(state.activeTab);
      if (state.activeTab === tab && state.isOpen) {
        return { isOpen: false };
      }
      return {
        activeTab: tab,
        isOpen: true,
      };
    }),

  handleClose: () => set({ isOpen: false, activeTab: '' }),
}));
