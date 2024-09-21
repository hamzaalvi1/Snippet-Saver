import { Grid } from "@mui/material";
import { CodeSnippet } from "@/components";

import { getQueryClient } from "@/queries";
import { codeSnippetOption } from "@/queries/code-snippet.queries";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import dynamic from "next/dynamic";
const Tags = dynamic(() => import("../../features/dashboard/Tags"));

const Dashboard = () => {
  // console.log(cookies().get("accessToken"));
  const queryClient = getQueryClient();
  const queryOptions = codeSnippetOption({});

  void queryClient.prefetchQuery(queryOptions);
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Tags />
        <Grid container spacing={10} mt={10}>
          <Grid item xl={4} sm={12} md={12} lg={6} xs={12}>
            <CodeSnippet />
          </Grid>
        </Grid>
      </HydrationBoundary>
    </div>
  );
};

export default Dashboard;
