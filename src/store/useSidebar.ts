import { create } from "zustand";

// Define the type for your state
type SidebarStore = {
  open: boolean;
  toggleOpen: () => void;
};
const useSidebar = create<SidebarStore>((set) => ({
  open: true,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export default useSidebar;
