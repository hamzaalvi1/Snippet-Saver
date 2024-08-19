import { pxToEM, styled } from "@/theme";
import {
  Tooltip as MUIToolTip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";

const ToolTip = styled(({ className, ...props }: TooltipProps) => (
  <MUIToolTip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 500,
    fontSize: pxToEM(14),
    paddingBlock: pxToEM(10),
    paddingInline: pxToEM(15),
    width: "fit-content",
    minWidth: "fit-content",
    boxShadow: "-9px 3px 40px 0px #9090901A;",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
    boxShadow: "-9px 3px 40px 0px #9090901A;",
  },
}));

export default ToolTip;
