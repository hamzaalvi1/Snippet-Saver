"use client";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";

interface ISnippetMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClick: () => void;
  menuList: { title: string; icon: React.ReactElement; onClick: () => void }[];
}

const SnippetMenu: React.FC<ISnippetMenuProps> = (props) => {
  const { open, handleClick, anchorEl, menuList } = props;

  return (
    <Menu
      open={open}
      elevation={1}
      id="account-menu"
      onClose={handleClick}
      onClick={handleClick}
      anchorEl={anchorEl}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {menuList.map(({ icon, title, onClick }, idx) => (
        <MenuItem key={idx} onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          {title}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SnippetMenu;
