import { Button } from "@/components";
import { mq } from "@/utils";
import newStyled from "@emotion/styled";

interface IHeaderProps {
  onLoad?: VoidFunction;
  error?: boolean;
  loading?: boolean;
}

const HeaderWrapper = newStyled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  zIndex: 100,
  color: theme.palette.text.primary,
  flexDirection: "column",
  background: theme.palette.background.default,

  "& .header-right": {
    flexGrow: "1",
    display: "flex",
    justifyContent: "end",
    flexDirection: "column",
    gap: 12,

    "& .error": {
      background: theme.palette.background.paper,
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: "8px 16px",
      fontSize: 18,
      fontWeight: 500,
    },

    "& > button": {
      display: "flex",
      gap: 3,
      alignItems: "center",
      width: "100%",
      fontWeight: 600,
      fontSize: 18,
    },

    [mq("md")]: {
      flexDirection: "row",
      "& > button": {
        width: 204,
      },
    },
  },

  [mq("lg")]: {
    flexDirection: "row",
  },
}));

const Header = ({ onLoad, error = true, loading = true }: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <img src="/assets/logo-text.svg" alt="logo-text" />
      <div className="header-right">
        {error && (
          <div className="error">
            <img src="/assets/icons/alert.svg" alt="alert" />
            Ошибка: не удалось загрузить информацию
          </div>
        )}
        <Button disabled={loading} onClick={onLoad}>
          Обновить
          <img
            style={loading ? { animation: "spin 1s linear infinite" } : {}}
            src="/assets/icons/refresh.svg"
            alt="refresh"
          />
        </Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
