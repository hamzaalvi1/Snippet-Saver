import { Grid } from "@mui/material";
import { Skeleton } from "@/components";
const loading = () => {
  const skeletonItems = Array(6).fill(null);
  return (
    <Grid container spacing={10} mt={10} component={"section"}>
      {skeletonItems.map((_, index) => (
        <Grid key={index} item xl={4} sm={12} md={12} lg={6} xs={12}>
          <Skeleton.CodeSnippetSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default loading;
