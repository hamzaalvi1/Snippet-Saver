"use client";

import { pxToEM } from "@/theme";

import { Box, useMediaQuery } from "@mui/material";
import { InputField, Button } from "@/components";
import { AuthText, AuthHeader, StyledAuthBox } from "@/features/auth";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import { useLoginContainer } from "../login/useLoginContainer";
const SignUpPage = () => {
  const { control, passwordToggle, handlePasswordToggle, handleNavigate } =
    useLoginContainer();
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
          <form>
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
              title="Signup"
              block={true}
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
