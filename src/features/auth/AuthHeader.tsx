import Image from "next/image";

import { pxToEM, theme } from "@/theme";
import { Box, Typography } from "@mui/material";

interface IAuthHeaderProps {
  heading: string;
  text: string;
}

const AuthHeader: React.FC<IAuthHeaderProps> = (props) => {
  const { heading, text } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={pxToEM(10)}
      width={"100%"}
    >
      <Box>
        <Image
          alt="logo"
          width={55}
          height={55}
          src={"/assets/images/logo.png"}
        />
        <Typography variant="h2">{heading}</Typography>
        <Typography
          variant="body1"
          component={"span"}
          color={theme.palette.primary.main}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthHeader;
