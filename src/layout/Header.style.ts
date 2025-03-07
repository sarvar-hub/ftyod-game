import { mq } from "@/utils";
import newStyled from "@emotion/styled";

export const HeaderWrapper = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  zIndex: 100,
  color: theme.palette.text.primary,
  flexDirection: "column",
  background: theme.palette.background.default,

  "& .header-right": {
    flexGrow: "1",
    display: "flex",
    justifyContent: "end",
    flexDirection: "column",
    gap: 12,

    "& .error": {
      background: theme.palette.background.paper,
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: "8px 16px",
      fontSize: 18,
      fontWeight: 500,
    },

    "& > button": {
      display: "flex",
      gap: 3,
      alignItems: "center",
      width: "100%",
      fontWeight: 600,
      fontSize: 18,
    },

    [mq("md")]: {
      flexDirection: "row",
      "& > button": {
        width: 204,
      },
    },
  },

  [mq("lg")]: {
    flexDirection: "row",
  },
}));
