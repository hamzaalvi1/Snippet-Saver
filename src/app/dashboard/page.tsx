import { ClientRender } from "@/components";
import SnippetsListing from "@/features/dashboard/SnippetsListing";

const Dashboard = () => {
  return (
    <ClientRender loadingComponent={<>Loading....</>}>
      <SnippetsListing />
    </ClientRender>
  );
};

export default Dashboard;
