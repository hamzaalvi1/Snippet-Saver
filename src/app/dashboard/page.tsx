import { Grid } from "@mui/material";
import { CodeSnippet } from "@/components";
import { Tags } from "@/features/dashboard";

const Dashboard = () => {
  return (
    <div>
      <Tags />

      <Grid container spacing={10}>
        <Grid item xl={4}>
          <CodeSnippet />
        </Grid>
        <Grid item xl={4}>
          <CodeSnippet />
        </Grid>
        <Grid item xl={4}>
          <CodeSnippet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
