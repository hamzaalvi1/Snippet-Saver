"use client";

import { Grid } from "@mui/material";
import { CodeSnippet } from "@/components";

import { useCodeSnippetQuery } from "@/queries/code-snippet.queries";

const SnippetsListing = () => {
  const { data } = useCodeSnippetQuery();
  console.log(data)
  return (
    <Grid container spacing={10} mt={10} component={"section"}>
      {/* {data.snippets.map((snippet) => {
        return (
          <Grid item xl={4} sm={12} md={12} lg={6} xs={12} key={snippet._id}>
            <CodeSnippet />;
          </Grid>
        );
      })} */}
    </Grid>
  );
};

export default SnippetsListing;
