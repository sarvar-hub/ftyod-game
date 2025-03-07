import { IMatchCard } from "@/types";
import request from "@/utils/axios";

export const getMatchData = () => (): Promise<{ data: IMatchCard[] }> =>
  request({
    method: "GET",
    url: "/fronttemp-service",
  });
