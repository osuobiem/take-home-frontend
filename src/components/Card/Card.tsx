import {ReactNode} from "react";
import * as S from "./Card.style";

export const Card = ({children, ...rest}: {children?: ReactNode}) => {
  return <S.CardContainer {...rest}>{children}</S.CardContainer>;
};
