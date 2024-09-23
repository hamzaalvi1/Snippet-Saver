"use client";
import { Skeleton } from "@mui/material";

const CodeSnippetSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={350}
      sx={{ mb: 3, borderRadius: 2 }}
    />
  );
};

export default CodeSnippetSkeleton;
