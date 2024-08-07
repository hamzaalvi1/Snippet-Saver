"use client";
import Image from "next/image";

import { pxToEM } from "@/theme";
import { Grid, SxProps } from "@mui/material";
import { StyledAuthCard } from "./auth.styles";

interface IAuthCardProps {
  imgUrl: string;
  element: React.ReactElement;
  direction?: "row" | "column" | "row-reverse";
}

const AuthCard: React.FC<IAuthCardProps> = (props) => {
  const { imgUrl, element: Element, direction = "row" } = props;

  const gridContainerStyles: SxProps = {
    height: "100%",
    alignItems: "center",
    padding: pxToEM(40),
    display: "flex",
    flexFlow: direction,
  };

  return (
    <StyledAuthCard>
      <Grid container spacing={2} sx={gridContainerStyles}>
        <Grid item md={8}>
          {Element}
        </Grid>
        <Grid item md={4}>
          <Image src={imgUrl} alt="auth-img" width={300} height={350} />
        </Grid>
      </Grid>
    </StyledAuthCard>
  );
};

export default AuthCard;
