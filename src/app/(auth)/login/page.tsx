"use client";
import Image from "next/image";

import { theme, pxToEM } from "@/theme";

import { Box, Typography } from "@mui/material";
import { StyledAuthBox } from "@/features/auth";
import { InputField, Button } from "@/components";
import { MdOutlineVisibility } from "react-icons/md";

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { control } = useForm();
  return (
    <StyledAuthBox>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={pxToEM(10)}
        width={"100%"}
      >
        <Image
          alt="logo"
          width={55}
          height={55}
          src={"/assets/images/logo.png"}
        />
        <Typography variant="h2">Login into your account</Typography>
        <Typography
          variant="body1"
          component={"span"}
          color={theme.palette.primary.main}
        >
          See what is in code snippets
        </Typography>
        <Box width={"80%"}>
          <InputField
            id="email"
            name="email"
            label="Email Address"
            control={control}
            placeholder="mail@abc.com"
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            control={control}
            placeholder="***********"
            rightIcon={<MdOutlineVisibility />}
            showIcon={true}
          />
          <Button title="Login" block={true} />
        </Box>
      </Box>
    </StyledAuthBox>
  );
};

export default LoginPage;
