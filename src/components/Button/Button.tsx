import {ReactNode} from "react";
import * as S from "./Button.style";

export const Button = ({children, ...rest}: {children: ReactNode}) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
