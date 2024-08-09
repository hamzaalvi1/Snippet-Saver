import { Grid } from "@mui/material";
import { StyledAuthContainer, StyledBgImagePane } from "./auth.styles";

interface IAuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<IAuthWrapperProps> = (props) => {
  const { children } = props;

  return (
    <StyledAuthContainer>
      <Grid container>
        <Grid
          item
          sm={0}
          md={6}
          lg={6}
          xl={7}
          sx={{ "@media(max-width:766px)": { display: "none" } }}
        >
          <StyledBgImagePane />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={5}>
          {children}
        </Grid>
      </Grid>
    </StyledAuthContainer>
  );
};

export default AuthWrapper;
