"use client";

import { pxToEM } from "@/theme";

import { Box, useMediaQuery } from "@mui/material";
import { InputField, Button } from "@/components";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import {
  AuthText,
  AuthHeader,
  StyledAuthBox,
  StyledForgotPassword,
} from "@/features/auth";

import { useLoginContainer } from "./useLoginContainer";
const LoginPage = () => {
  const {
    control,
    isPending,
    passwordToggle,
    handleLogin,
    handleSubmit,
    handleNavigate,
    handlePasswordToggle,
  } = useLoginContainer();
  const matchesLg = useMediaQuery("(max-width:1199px)");

  const passwordIcon = () =>
    passwordToggle ? (
      <MdOutlineVisibilityOff fontSize={pxToEM(22)} />
    ) : (
      <MdOutlineVisibility fontSize={pxToEM(22)} />
    );

  return (
    <StyledAuthBox>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={pxToEM(10)}
        width={"100%"}
      >
        <AuthHeader
          heading="Login into your account"
          text={"See what is in code snippets"}
        />
        <Box width={matchesLg ? "100%" : "80%"}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <InputField
              id="email"
              name="email"
              label="Email Address"
              control={control}
              placeholder="mail@abc.com"
              sxFormControl={{ marginBottom: pxToEM(15) }}
            />
            <InputField
              id="password"
              name="password"
              label="Password"
              control={control}
              placeholder="***********"
              showIcon={true}
              rightIcon={passwordIcon()}
              onIconClick={handlePasswordToggle}
              type={passwordToggle ? "text" : "password"}
              sxFormControl={{ marginBottom: pxToEM(5) }}
            />
            <StyledForgotPassword
              onClick={() => handleNavigate("/forgot-password")}
            >
              Forgot Password?
            </StyledForgotPassword>
            <Button
              title="Login"
              block={true}
              type="submit"
              isLoading={isPending}
              sx={{ marginTop: pxToEM(15) }}
            />
          </form>
          <AuthText
            text="Not Register Yet?"
            highlightedText="Create an account"
            handleClick={() => handleNavigate("/signup")}
          />
        </Box>
      </Box>
    </StyledAuthBox>
  );
};

export default LoginPage;
