import { IScoreUser } from "@/types";
import { UserCardComponent } from "./style";

interface IUserCardProps {
  user: IScoreUser;
}

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <UserCardComponent>
      <div className="user-image">
        <img src={user.img} className="user-avatar" alt="user-img" />
        <img src="/assets/ramka.svg" className="ramka" alt="ramka" />
      </div>
      <div className="name">{user.name}</div>
      <div className="stats">
        <span className="kills">Убийств:</span>
        <span>{user.kills}</span>
      </div>
    </UserCardComponent>
  );
};

export default UserCard;
