import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button" | "a"> & {
  btnType?: "button" | "submit" | "link";
  btnText?: string;
  icon?: React.ReactNode;
};

const Button = ({
  btnText,
  btnType = "button",
  icon,
  children,
  className = "",
  ...restProps
}: ButtonProps) => {
  const commonClass =
    "bg-greenFav rounded-full py-1 px-4 hover:bg-opacity-80 font-semibold";
  return btnType === "link" ? (
    <a
      className={`${commonClass} hover:text-white btn-type ${className}`}
      {...(restProps as ComponentProps<"a">)}
    >
      {btnText ?? children}
      {icon}
    </a>
  ) : (
    <button
      className={`${commonClass} ${className}`}
      {...(restProps as ComponentProps<"button">)}
    >
      {btnText ?? children}
      {icon}
    </button>
  );
};

export default Button;
