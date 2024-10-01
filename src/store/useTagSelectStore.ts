import { create } from "zustand";
// Define the type for your state
type TagSelectStore = {
  tagValue: string | boolean;
  handleTagSelect: (tag: string) => void;
  handleClearSelectedTag: () => void;
};
const useTagSelectStore = create<TagSelectStore>((set) => {
  return {
    tagValue: false,
    handleTagSelect: (tag: string) => {
      set({ tagValue: tag });
    },
    handleClearSelectedTag: () => {
      set({ tagValue: false });
    },
  };
});

export default useTagSelectStore;
