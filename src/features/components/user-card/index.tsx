import { IScoreUser } from "@/types";
import newStyled from "@emotion/styled";

interface IUserCardProps {
  user: IScoreUser;
}

const UserCardWrapper = newStyled.div(({ theme }) => ({
  borderRadius: 4,
  flexGrow: 1,
  background: "#101318",
  color: theme.palette.text.primary,
  fontWeight: 600,
  display: "flex",
  gap: 8,
  alignItems: "center",
  padding: "4px 12px",

  "& .kills": {
    color: "#FAFAFA66",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <UserCardWrapper>
      <div
        style={{
          position: "relative",
          width: 36,
          height: 36,
        }}
      >
        <img
          width={36}
          height={36}
          src={user.img}
          alt="user-img"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            scale: 0.7,
            objectFit: "cover",
          }}
        />
        <img
          src="/assets/ramka.svg"
          alt="frame"
          style={{
            position: "absolute",
            top: 0,
            scale: 1,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>
      <div style={{ flexGrow: 1 }}>{user.name}</div>
      <div style={{ flexGrow: 1, display: "flex", gap: 4 }}>
        <span className="kills">Убийств:</span>
        <span>{user.kills}</span>
      </div>
    </UserCardWrapper>
  );
};

export default UserCard;
