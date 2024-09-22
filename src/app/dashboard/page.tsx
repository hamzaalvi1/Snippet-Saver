import { getQueryClient } from "@/queries";
import {
  pokemonOptions,
  codeSnippetOption,
  useCodeSnippetQuery,
} from "@/queries/code-snippet.queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Tags } from "@/features/dashboard";
import SnippetsListing from "@/features/dashboard/SnippetsListing";

const Dashboard = () => {
  const queryClient = getQueryClient();


  void queryClient.prefetchQuery(pokemonOptions);

  
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Tags />
        <SnippetsListing />
      </HydrationBoundary>
    </div>
  );
};

export default Dashboard;
