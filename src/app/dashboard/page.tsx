import { Grid } from "@mui/material";
import { CodeSnippet } from "@/components";
import { Tags } from "@/features/dashboard";

const Dashboard = () => {
  return (
    <div>
      <Tags />
      <Grid container spacing={10} mt={10}>
        <Grid item xl={4} sm={12} md={12} lg={6} xs={12}>
          <CodeSnippet />
        </Grid>
        <Grid item xl={4} sm={12} md={12} lg={6} xs={12}>
          <CodeSnippet />
        </Grid>
        <Grid item xl={4} sm={12} md={12} lg={6} xs={12}>
          <CodeSnippet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
