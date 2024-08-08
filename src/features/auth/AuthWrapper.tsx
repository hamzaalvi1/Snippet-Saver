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
        <Grid item xs={7} md={7}>
          <StyledBgImagePane />
        </Grid>
        <Grid item xs={5} md={5}>
          {children}
        </Grid>
      </Grid>
    </StyledAuthContainer>
  );
};

export default AuthWrapper;
