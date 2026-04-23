import { create } from 'zustand';

interface SidebarProps {
  activeSidebar: string;
  isOpen: boolean;
  setActiveSidebar: (sidebar: string) => void;
  setIsOpen: (status: boolean) => void;
  toggleSidebarOpen: () => void;
  handleSidebarClick: (sidebar: string) => void;
}

export const useSidebarStore = create<SidebarProps>((set) => ({
  activeSidebar: '',
  isOpen: true,
  setActiveSidebar: (sidebar: string) => set({ activeSidebar: sidebar }),
  setIsOpen: (status: boolean) => set({ isOpen: status }),
  toggleSidebarOpen: () =>
    set((state) => {
      return {
        isOpen: !state.isOpen,
      };
    }),
  handleSidebarClick: (sidebar: string) =>
    set((state) => {
      console.log('current:', state.activeSidebar);
      console.log('clicked:', sidebar);

      return {
        activeSidebar: state.activeSidebar === sidebar ? '' : sidebar,
      };
    }),
}));
