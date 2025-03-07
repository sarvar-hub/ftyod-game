import { ButtonColors, ButtonVariants } from "@/types";
import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  wrap?: "wrap" | "no-wrap";
  color?: ButtonColors;
  variant?: ButtonVariants;
}

const sizeStyle = {
  sm: {
    fontSize: "14px",
    padding: "6px 12px",
  },
  md: {
    fontSize: "16px",
    padding: "8px 16px",
  },
  lg: {
    fontSize: "18px",
    padding: "10px 20px",
  },
};

const StyledButton = styled.button<ButtonProps>(
  ({ size = "md", wrap = "no-wrap", color = "danger", theme }) => {
    const bg = theme.colors[color].main;
    const hoverBg = theme.colors[color].hover;

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      transition: "background-color 0.2s, color 0.2s",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      ...sizeStyle[size],
      whiteSpace: wrap === "wrap" ? "normal" : "nowrap",
      backgroundColor: bg,
      color: "#fff",
      "&:hover": { backgroundColor: hoverBg },
      ":disabled": {
        cursor: "not-allowed",
        backgroundColor: "#701328",
        color: theme.colors.danger.text,
        opacity: 0.8,
      },
    };
  },
);

const Button = ({
  size = "md",
  color = "danger",
  wrap = "no-wrap",
  variant = "contained",
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      color={color}
      wrap={wrap}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
