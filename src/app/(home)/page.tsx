import { Typography } from "@mui/material";
import { Button } from "@/components";

const HomePage = () => {
  return (
    <main>
      <Button title="Click Me" isLoading={true} />
      <Typography component={"h2"} variant="body2">
        HELLO WORLD
      </Typography>
    </main>
  );
};

export default HomePage;
