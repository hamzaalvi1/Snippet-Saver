"use client";
import { Stack } from "@mui/material";
import { Button, Skeleton } from "@/components";
import { MdOutlineAdd, MdOutlineClear } from "react-icons/md";
import { StyledTagWrapper, StyledTabs, StyledTab } from "./tag.style";

import { useTagsContainer } from "./useTagsContainer";

const Tags = () => {
  const {
    tagsData,
    tagValue,
    isTagsLoading,
    skeletonItems,
    handleTagSelect,
    handleClearSelectedTag,
  } = useTagsContainer();
  return (
    <StyledTagWrapper>
      {" "}
      {isTagsLoading ? (
        <Stack flexDirection={"row"} gap={5}>
          {skeletonItems.map((_, idx) => (
            <Skeleton.TagsSkeleton key={idx} />
          ))}
        </Stack>
      ) : (
        <StyledTabs
          value={tagValue}
          onChange={(_, newValue) => {
            handleTagSelect(newValue);
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tagsData?.tags?.map((tag) => (
            <StyledTab label={tag?.tag} key={tag?.id} value={tag?.tag} />
          ))}
        </StyledTabs>
      )}
      <Stack flexDirection={"row"} gap={15}>
        <Button
          title="Tag"
          height={40}
          startIcon={<MdOutlineAdd />}
          width={75}
        />
        {tagValue && (
          <Button
            title="Clear Tag"
            height={40}
            startIcon={<MdOutlineClear />}
            handleClick={handleClearSelectedTag}
            // width={75}
          />
        )}
      </Stack>
    </StyledTagWrapper>
  );
};

export default Tags;
