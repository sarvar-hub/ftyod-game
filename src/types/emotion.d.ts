import "@emotion/react";

export type TBreakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type TUIColor = {
  main: string;
  light: string;
  hover: string;
  text: string;
};

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: Record<TBreakpoints, string>;
    palette: {
      background: { paper: string; default: string };
      text: { disabled: string; hint: string; primary: string };
    };
    shadows: Record<number, string>;
    colors: {
      success: TUIColor;
      danger: TUIColor;
      warning: TUIColor;
    };
  }
}
