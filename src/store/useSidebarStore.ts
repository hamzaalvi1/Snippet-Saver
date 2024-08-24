import { create } from "zustand";
// Define the type for your state
type SidebarStore = {
  open: boolean;
  toggleOpen: () => void;
  handleCloseSidebar: () => void;
};
const useSidebarStore = create<SidebarStore>((set) => {
  return {
    open: true,
    toggleOpen: () => set((state) => ({ open: !state.open })),
    handleCloseSidebar: () => set({ open: false }),
  };
});

export default useSidebarStore;
