"use client";
import { usePathname } from "next/navigation";
import {
  ListItem,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";

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
  );
};
export default MenuItem;
