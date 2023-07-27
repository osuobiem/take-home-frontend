import {ButtonHTMLAttributes} from "react";
import * as S from "./Button.style";

export const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
