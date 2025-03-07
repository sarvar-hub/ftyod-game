import { Collapse } from "@/components";
import { IMatchCard, MatchStatus } from "@/types";
import UserCard from "../user-card";
import { StatusColor, StatusText } from "./constant";
import {
  CollapseWrapper,
  CommandWrapper,
  NameWrapper,
  ScoreWrapper,
  StatsCard,
  StatusButton,
  UserCardWrapper,
  Wrapper,
} from "./styles";

interface CommandCardProps {
  match: IMatchCard & { type: MatchStatus };
}

const CommandCard = ({ match }: CommandCardProps) => {
  return (
    <Collapse
      header={
        <Wrapper>
          <CommandWrapper>
            <NameWrapper>
              <img src="/assets/icons/command-icon.svg" />
              <span>{match.command1.name}</span>
            </NameWrapper>

            <ScoreWrapper>
              <span>
                {match.command1.score}:{match.command2.score}
              </span>
              <StatusButton color={StatusColor[match.type]}>
                {StatusText[match.type]}
              </StatusButton>
            </ScoreWrapper>

            <NameWrapper>
              <span>{match.command2.name}</span>
              <img src="/assets/icons/command-icon.svg" />
            </NameWrapper>
          </CommandWrapper>
        </Wrapper>
      }
    >
      <CollapseWrapper>
        <div className="scores">
          <UserCardWrapper>
            <UserCard user={match.command1.user1} />
            <UserCard user={match.command1.user2} />
            <UserCard user={match.command1.user3} />
          </UserCardWrapper>
          <StatsCard>
            <div>
              <span className="label">Points: </span>
              <span className="stat">+{match.command1.points}</span>
            </div>
            <div>
              <span className="label">Место:</span>
              <span className="stat">+{match.command1.place}</span>
            </div>
            <div>
              <span className="label">Всего убийств:</span>
              <span className="stat">+{match.command1.total_kills}</span>
            </div>
          </StatsCard>
        </div>
        <div className="scores">
          <UserCardWrapper>
            <UserCard user={match.command2.user1} />
            <UserCard user={match.command2.user2} />
            <UserCard user={match.command2.user3} />
          </UserCardWrapper>
          <StatsCard>
            <div>
              <span className="label">Points:</span>
              <span className="stat">+{match.command2.points}</span>
            </div>
            <div>
              <span className="label">Место:</span>
              <span className="stat">+{match.command2.place}</span>
            </div>
            <div>
              <span className="label">Всего убийств:</span>
              <span className="stat">+{match.command2.total_kills}</span>
            </div>
          </StatsCard>
        </div>
      </CollapseWrapper>
    </Collapse>
  );
};

export default CommandCard;
