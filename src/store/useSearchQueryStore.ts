import { create } from "zustand";
// Define the type for your state
type SearchQueryStore = {
  searchValue: string;
  isFavorite: boolean;
  handleSearch: (searchQuery: string) => void;
};
const useSearchQueryStore = create<SearchQueryStore>((set) => {
  return {
    searchValue: "",
    isFavorite: false,
    handleSearch: (searchQuery: string) => {
      set({ searchValue: searchQuery });
    },
    // Add more handlers as needed to handle other search-related functionality.
  };
});

export default useSearchQueryStore;
