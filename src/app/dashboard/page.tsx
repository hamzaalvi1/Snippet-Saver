import { ClientRender } from "@/components";

import DashboardLoading from "./loading";
import SnippetsListing from "@/features/dashboard/SnippetsListing";

const Dashboard = () => {
  return (
    <ClientRender loadingComponent={<DashboardLoading />}>
      <SnippetsListing />
    </ClientRender>
  );
};

export default Dashboard;
