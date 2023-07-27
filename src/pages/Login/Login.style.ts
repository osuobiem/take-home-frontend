import {styled} from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  & form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export const HeaderText = styled.h1`
  margin-right: auto;
  margin-left: auto;
`;
