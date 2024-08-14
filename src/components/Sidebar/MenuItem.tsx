"use client";
import { usePathname } from "next/navigation";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";

import { StyledListItemButton } from "./Sidebar.style";

interface IMenuItemProps {
  title: string;
  url?: string;
  icon: React.ElementType;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const pathName = usePathname();
  const { title, url, icon: Icon } = props;
  return (
    <ListItem disablePadding={true}>
      <StyledListItemButton
        disableRipple={false}
        selected={pathName == url ? true : false}
      >
        <Typography variant="body1">
          <Icon size={22} />
          {title}
        </Typography>
      </StyledListItemButton>
    </ListItem>
  );
};
export default MenuItem;
