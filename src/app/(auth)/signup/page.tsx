"use client";

import { pxToEM } from "@/theme";

import { Box, useMediaQuery } from "@mui/material";
import { InputField, Button } from "@/components";
import { AuthText, AuthHeader, StyledAuthBox } from "@/features/auth";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import { useSignUpContainer } from "./useSignUpContainer";
const SignUpPage = () => {
  const {
    control,
    isPending,
    passwordToggle,
    handleSignUp,
    handleSubmit,
    handleNavigate,
    handlePasswordToggle,
  } = useSignUpContainer();
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
          heading="Create an account"
          text={"To save your code snippets"}
        />
        <Box width={matchesLg ? "100%" : "80%"}>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <InputField
              id="username"
              name="username"
              label="Username"
              control={control}
              placeholder="John Doe"
              sxFormControl={{ marginBottom: pxToEM(15) }}
            />
            <InputField
              id="email"
              name="email"
              showIcon={true}
              control={control}
              label="Email Address"
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

            <Button
              block={true}
              type="submit"
              title="Signup"
              isLoading={isPending}
              sx={{ marginTop: pxToEM(15) }}
            />
          </form>
          <AuthText
            text="Alreadt Register"
            highlightedText="Login your account"
            handleClick={() => handleNavigate("/login")}
          />
        </Box>
      </Box>
    </StyledAuthBox>
  );
};

export default SignUpPage;
