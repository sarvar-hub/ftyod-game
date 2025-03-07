export type ButtonColors = "success" | "danger" | "warning";

export type ButtonVariants = "contained";

export type MatchStatus = "live" | "finished" | "preparing";

export interface IScoreUser {
  kills: number;
  name: string;
  img: string;
}

export interface ICommand {
  name: string;
  user1: IScoreUser;
  user2: IScoreUser;
  user3: IScoreUser;
  points: number;
  place: number;
  total_kills: number;
  score: number;
}

export interface IMatchCard {
  command1: ICommand;
  command2: ICommand;
  type: MatchStatus;
}
