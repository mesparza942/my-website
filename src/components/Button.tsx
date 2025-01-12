import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button" | "a"> & {
  btnType?: "button" | "submit" | "link";
  btnText: string;
  icon?: React.ReactNode;
};

const Button = ({
  btnText,
  btnType = "button",
  icon,
  ...restProps
}: ButtonProps) => {
  const commonClass =
    "bg-greenFav m-2 rounded-full py-1 px-3 hover:bg-opacity-80 font-semibold";
  return btnType === "link" ? (
    <a
      className={`${commonClass} hover:text-white btn-type`}
      {...(restProps as ComponentProps<"a">)}
    >
      {btnText}
      {icon}
    </a>
  ) : (
    <button
      className={commonClass}
      {...(restProps as ComponentProps<"button">)}
    >
      {btnText}
      {icon}
    </button>
  );
};

export default Button;
