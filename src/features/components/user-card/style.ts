import newStyled from "@emotion/styled";

export const UserCardComponent = newStyled.div(({ theme }) => ({
  borderRadius: 4,
  flexGrow: 1,
  background: "#101318",
  color: theme.palette.text.primary,
  fontWeight: 600,
  display: "flex",
  gap: 8,
  alignItems: "center",
  padding: "4px 12px",

  "& > .user-image": {
    position: "relative",
    width: 36,
    height: 36,
    "& > .user-avatar": {
      width: "100%",
      height: "100%",
      borderRadius: "35%",
      scale: 0.7,
      objectFit: "cover",
    },
    "& > .ramka": {
      position: "absolute",
      top: 0,
      scale: 1.2,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    },
  },

  "& > .name": {
    flexGrow: 1,
  },

  "& > .stats": {
    flexGrow: 1,
    display: "flex",
    gap: 4,

    "& .kills": {
      color: "#FAFAFA66",
      fontWeight: 500,
      fontSize: 14,
    },
  },
}));
