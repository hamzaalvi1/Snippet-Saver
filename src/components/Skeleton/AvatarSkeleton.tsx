"use client";
import { Box, Skeleton } from "@mui/material";
import { StyledAvatarBox } from "../Avatar/Avatar.style";

const AvatarSkeleton = () => {
  return (
    <StyledAvatarBox>
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Box className="skeleton-avatar-details">
        <Skeleton
          variant="rectangular"
          width={100}
          height={18}
          sx={{ mb: 3 }}
        />
        <Skeleton variant="rectangular" width={100} height={18} />
      </Box>
    </StyledAvatarBox>
  );
};

export default AvatarSkeleton;
