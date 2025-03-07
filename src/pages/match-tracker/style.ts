import newStyled from "@emotion/styled";

export const MatchTrackerWrapper = newStyled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  color: theme.colors.danger.text,
  padding: 42,
  overflow: "auto",
}));
