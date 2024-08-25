"use client";
import { theme } from "@/theme";

import { useUserStore } from "@/store";

import { StyledAvatarBox } from "./Avatar.style";
import { Avatar as MuiAvatar, Box, Typography } from "@mui/material";

const Avatar = () => {
  const { getUser } = useUserStore((state) => state);
  return (
    <StyledAvatarBox>
      <MuiAvatar
        src={getUser?.()?.imgUrl || ""}
        alt={getUser?.()?.username || "Avatar"}
        sx={{ bgcolor: theme.palette.primary.main }}
      />
      <Box className="avatar-details">
        <Typography variant="h5" fontWeight={700}>
          {getUser?.()?.username}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.primary.main}>
          {getUser?.()?.email}
        </Typography>
      </Box>
    </StyledAvatarBox>
  );
};

export default Avatar;
