import { Button } from "@/components";
import { HeaderWrapper } from "./Header.style";

interface IHeaderProps {
  onLoad?: VoidFunction;
  error?: boolean;
  loading?: boolean;
}

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
