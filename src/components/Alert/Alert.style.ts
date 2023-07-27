import styled from "styled-components";

export const AlertContainer = styled.div<{
  $border: string;
  $bg: string;
  $color: string;
  $float: boolean;
}>`
  width: ${({$float}) => ($float ? "300px" : "calc(100% - 32px)")};
  max-width: 100%;
  position: ${({$float}) => ($float ? "fixed" : "unset")};
  border-radius: 16px;
  border: solid 1px;
  border-color: ${({$border}) => $border};
  background: ${({$bg}) => $bg};
  top: ${($float) => ($float ? "30px" : "unset")};
  right: ${({$float}) => ($float ? "24px" : "unset")};
  gap: 10px;
  padding: 0px 16px;
  margin: "auto";
  z-index: 3000;
  align-items: center;

  & > p {
    font-size: 14px;
    color: ${({$color}) => $color};
    font-weight: 500;
  }
`;
