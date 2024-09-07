import { pxToEM, styled } from "@/theme";
import { Autocomplete } from "@mui/material";

export const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "&.ss-autocomplete": {
    ".MuiInputBase-root": {
      borderRadius: "6px",
      paddingInline: pxToEM(15),
      width: "100%",
      minHeight: pxToEM(55),
      color: theme.palette.text.primary,
      fontSize: pxToEM(14),
    },
    input: {
      width: "100%",
      height: "100%",
      border: "none",
      "&::placeholder": {
        fontSize: pxToEM(16),
        color: theme.palette.text.secondary,
        opacity: 1,
      },
    },
    ".MuiOutlinedInput-notchedOutline": {
      padding: 0,
      borderWidth: "2px",
      borderColor: theme.palette.border.main,
      "&:hover": {
        borderColor: theme.palette.primary.main,
      },
    },
    ".MuiAutocomplete-input": {
      padding: "0", // Override with your desired padding
    },

    "& input:-webkit-autofill": {
      transition: "background-color 5000s ease-in-out 0s",
      backgroundColor: "transparent !important",
    },
  },
}));
