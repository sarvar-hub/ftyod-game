import BREAKPOINTS from "@/constants/breakpoints";
import { ButtonColors } from "@/types";
import { TBreakpoints, TUIColor } from "@/types/emotion";

const theme: {
  shadows: Record<number, string>;
  palette: {
    background: { paper: string; default: string };
    text: { disabled: string; hint: string; primary: string };
  };
  colors: Record<ButtonColors, TUIColor>;
  breakpoints: Record<TBreakpoints, string>;
} = {
  breakpoints: BREAKPOINTS,
  shadows: {
    1: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    2: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
    3: "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
    4: "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
  },
  palette: {
    background: {
      paper: "#0B0E12",
      default: "#090909",
    },
    text: {
      disabled: "#A1A1A1",
      hint: "#D1D5DB",
      primary: "#FFFFFF",
    },
  },
  colors: {
    success: {
      main: "#43AD28",
      hover: "#5CCB3A",
      light: "#A5E6A2",
      text: "#FFFFFF",
    },
    danger: {
      main: "#EF4444",
      hover: "#A01131",
      light: "#F8B2B2",
      text: "#FFFFFF",
    },
    warning: {
      main: "#EB6402",
      hover: "#FF7D1A",
      light: "#F9B98B",
      text: "#FFFFFF",
    },
  },
};

export default theme;
