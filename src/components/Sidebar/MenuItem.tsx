"use client";
import ToolTip from "./ToolTip";
import { Fade, ListItem, Typography } from "@mui/material";
import { StyledListItemButton } from "./Sidebar.style";

import { useSidebarStore, useUserStore } from "@/store";
import { usePathname, useRouter } from "next/navigation";

import { handleDeleteCookie } from "@/utils/cookies.utils";

interface IMenuItemProps {
  title: string;
  url?: string;
  icon: React.ElementType;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const { open } = useSidebarStore();
  const { clearUser } = useUserStore((state) => state);
  const handleLogout = () => {
    handleDeleteCookie();
    router.push("/login");
    clearUser();
  };
  const { title, url, icon: Icon } = props;
  return (
    <ToolTip title={title} arrow TransitionComponent={Fade} placement="right">
      <ListItem disablePadding={true}>
        <StyledListItemButton
          open={open}
          disableRipple={false}
          onClick={() => (url ? router.push(url) : handleLogout())}
          sx={{
            justifyContent: open ? "flex-start" : "center",
          }}
          {...(url && { selected: pathName == url ? true : false })}
        >
          <Icon size={22} />
          <Typography variant="body1">{title}</Typography>
        </StyledListItemButton>
      </ListItem>
    </ToolTip>
  );
};
export default MenuItem;
