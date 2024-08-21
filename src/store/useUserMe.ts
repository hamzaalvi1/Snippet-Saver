import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserResponseType } from "@/helper/api/user/responseType";

interface UserStoreState {
  user: UserResponseType | null;
  setUser: (userData: UserResponseType) => void;
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (userData: UserResponseType) => set({ user: userData }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useUserStore;
