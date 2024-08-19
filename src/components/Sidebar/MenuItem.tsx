"use client";
import { usePathname } from "next/navigation";
import ToolTip from "./ToolTip";
import { Fade, ListItem, Typography } from "@mui/material";

import { StyledListItemButton } from "./Sidebar.style";

import { useSidebar } from "@/store";
interface IMenuItemProps {
  title: string;
  url?: string;
  icon: React.ElementType;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { open } = useSidebar();
  const pathName = usePathname();
  const { title, url, icon: Icon } = props;
  return (
    <ToolTip title={title} arrow TransitionComponent={Fade} placement="right">
      <ListItem disablePadding={true}>
        <StyledListItemButton
          open={open}
          disableRipple={false}
          sx={{
            justifyContent: open ? "flex-start" : "center",
          }}
          selected={pathName == url ? true : false}
        >
          <Icon size={22} />

          <Typography variant="body1">{title}</Typography>
        </StyledListItemButton>
      </ListItem>
    </ToolTip>
  );
};
export default MenuItem;
