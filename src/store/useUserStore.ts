import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptData, decryptData } from "@/utils/encrypt.utils";
import { UserResponseType } from "@/helper/api/user/responseType";

interface UserStoreState {
  user: string | null;
  setUser: (userData: UserResponseType) => void;
  getUser: () => UserResponseType | null;
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (userData: UserResponseType) => {
        set({ user: encryptData(userData) });
      },
      getUser: () => {
        const encryptedUser = get().user;
        if (encryptedUser) {
          return decryptData(encryptedUser);
        }
        return null;
      },
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
