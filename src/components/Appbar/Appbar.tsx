"use client";
import { useState, useCallback } from "react";

import { useSidebarStore } from "@/store";

import { DrawerWidth } from "@/constants";

import { HiMenuAlt1 } from "react-icons/hi";
import { Searchbox, ClientRender, Avatar, Skeleton } from "@/components";
import { StyledAppBar, StyledIconButton, StyledToolbar } from "./Appbar.style";

const Appbar: React.FC<{}> = () => {
  const { open, toggleOpen } = useSidebarStore();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) =>
      setSearchQuery(evt.target.value),
    [setSearchQuery]
  );

  return (
    <StyledAppBar
      elevation={0}
      position="static"
      drawerWidth={open ? DrawerWidth.DEFAULT : DrawerWidth.MIN}
    >
      <StyledToolbar>
        <StyledIconButton
          color="primary"
          edge="start"
          aria-label="menu"
          onClick={toggleOpen}
        >
          <HiMenuAlt1 size={24} strokeWidth={0.5} />
        </StyledIconButton>
        <Searchbox value={searchQuery} handleChange={handleSearch} />
        <ClientRender loadingComponent={<Skeleton.AvatarSkeleton />}>
          <Avatar />
        </ClientRender>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Appbar;
