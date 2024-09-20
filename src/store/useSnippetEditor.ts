import { create } from "zustand";

type SnippetEditorStore = {
  open: boolean;
  handleOpenEditor: () => void;
  handleCloseEditor: () => void;
};
const useSnippertEditorStore = create<SnippetEditorStore>((set) => {
  return {
    open: false,
    handleOpenEditor: () => set({ open: true }),
    handleCloseEditor: () => set({ open: false }),
  };
});

export default useSnippertEditorStore;
