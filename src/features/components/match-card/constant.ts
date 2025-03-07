import { ButtonColors, MatchStatus } from "@/types";

export const StatusText: Record<MatchStatus, string> = {
  live: "Live",
  finished: "Finished",
  preparing: "Match preparing",
};

export const StatusColor: Record<MatchStatus, ButtonColors> = {
  live: "success",
  finished: "danger",
  preparing: "warning",
};
