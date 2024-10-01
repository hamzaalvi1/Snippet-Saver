"use client";
import { Skeleton } from "@mui/material";

const TagsSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={90}
      height={40}
      sx={{ borderRadius: 2 }}
    />
  );
};

export default TagsSkeleton;
