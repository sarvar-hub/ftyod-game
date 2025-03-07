import BREAKPOINTS from "@/constants/breakpoints";

export const mq = (key: keyof typeof BREAKPOINTS) =>
  `@media (min-width: ${BREAKPOINTS[key]})`;
