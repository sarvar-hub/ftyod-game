import CommandCard from "@/features/components/match-card";
import Header from "@/layout/Header";
import { useQuery } from "@tanstack/react-query";
import { getMatchData } from "./api";
import commands from "./data";
import { MatchTrackerWrapper } from "./style";

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
