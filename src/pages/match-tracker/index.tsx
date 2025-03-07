import CommandCard from "@/features/components/match-card";
import Header from "@/layout/Header";
import newStyled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getMatchData } from "./api";
import commands from "./data";

const MatchTrackerWrapper = newStyled.div(({ theme }) => ({
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

const MatchTracker = () => {
  const {
    isFetching,
    data: res,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["MATCH_DATA"],
    queryFn: getMatchData(),
  });

  return (
    <MatchTrackerWrapper>
      <Header loading={isFetching} error={isError} onLoad={refetch} />
      {res?.data.map((match, index) => (
        <CommandCard match={match} key={index} />
      ))}
      {!isFetching &&
        !res &&
        commands.map((match, index) => (
          <CommandCard match={match} key={index} />
        ))}
    </MatchTrackerWrapper>
  );
};

export default MatchTracker;
