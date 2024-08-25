import { Box } from "@mui/material";
import { styled, theme } from "@/theme";

export const StyledAvatarBox = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: ${theme.breakpoints.values.md}px) {
    .avatar-details {
      display: none;
    }
    .skeleton-avatar-details {
      display: none;
    }
  }
`;
