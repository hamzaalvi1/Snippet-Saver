"use client";

import { Grid } from "@mui/material";
import { CodeSnippet } from "@/components";

import { useDashboardContainer } from "./useDashboardContainer";
const SnippetsListing = () => {
  const { snippetsData, isSnippetsLoading } = useDashboardContainer();
  console.log(snippetsData, "snippetsData");
  return (
    <Grid container spacing={10} mt={10} component={"section"}>
      {snippetsData?.snippets?.map((snippet) => {
        return (
          <Grid item xl={4} sm={12} md={12} lg={6} xs={12} key={snippet._id}>
            <CodeSnippet snippetData={snippet} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SnippetsListing;
