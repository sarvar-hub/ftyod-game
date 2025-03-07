import theme from "@/theme/theme";
import { ThemeProvider as MThemeProvider } from "@emotion/react";

export default function ThemeProvidersdfasdf({
  children,
}: React.PropsWithChildren) {
  return <MThemeProvider theme={theme}>{children}</MThemeProvider>;
}
