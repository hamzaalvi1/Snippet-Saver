import { BsTags } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export type SidebarItem = {
  title: string;
  url?: string;
  icon: React.ElementType;
};

type SidebarConfig = SidebarItem[];
export const sideBarConfig: SidebarConfig = [
  {
    title: "All Snippets",
    url: "/dashboard",
    icon: FaCode,
  },
  {
    title: "Favorites",
    url: "/dashboard/favorites",
    icon: MdOutlineFavoriteBorder,
  },
  {
    title: "Trash",
    url: "/dashboard/bin",
    icon: HiOutlineTrash,
  },
  {
    title: "Tags",
    url: "/dashboard/tags",
    icon: BsTags,
  },
  {
    title: "Log Out",
    url: "/dashboard/favorites",
    icon: HiOutlineLogout,
  },
];
