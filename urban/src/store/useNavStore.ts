import { create } from 'zustand';

interface TabStore {
  activeTab: string;
  isOpen: boolean;
  setActiveTab: (tab: string) => void;
  setIsOpen: (status: boolean) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: '',
  isOpen: false,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  setIsOpen: (status: boolean) => set({ isOpen: status }),
}));
