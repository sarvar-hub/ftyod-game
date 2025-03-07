import { Button } from "@/components";
import { mq } from "@/utils";
import newStyled from "@emotion/styled";

export const Wrapper = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.palette.background.paper,
  flexGrow: 1,
  [mq("md")]: {
    gap: 8,
  },
}));

export const CommandWrapper = newStyled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  fontSize: 14,

  [mq("md")]: {
    fontsize: 16,
  },
});

export const ScoreWrapper = newStyled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const NameWrapper = newStyled.div({
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: 8,
  paddingRight: 0,
  fontWeight: 600,

  "& > img": {
    height: 28,
    width: 28,
  },

  [mq("md")]: {
    padding: 24,

    "& > img": {
      height: 48,
      width: 48,
    },
  },
});

export const StatusButton = newStyled(Button)({
  width: 70,
  height: 23,
  padding: "4px 2px",
  fontSize: 12,

  [mq("md")]: {
    width: 120,
    height: 27,
  },
});

export const CollapseWrapper = newStyled.div({
  display: "flex",
  gap: 20,
  padding: 10,

  "& > .scores": {
    display: "flex",
    gap: 8,
    flexGrow: 1,
    flexDirection: "column",
  },
});

export const UserCardWrapper = newStyled.div({
  display: "flex",
  gap: 8,
});

export const StatsCard = newStyled.div({
  borderRadius: 4,
  background: "#101318",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px 10px",

  "& > div": {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,

    "& > .stat": {
      fontWeight: 600,
    },

    "& > .label": {
      fontWeight: 500,
      fontSize: 14,
      color: "#FAFAFA66",
    },
  },
});
