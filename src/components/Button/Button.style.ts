import styled from "styled-components";

export const Button = styled.button`
  background: #7856ff;
  border-radius: 16px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: unset;
  justify-content: center;
  cursor: pointer;
  color: white;

  &:hover {
    background: #6448d4;
    border-color: #6448d4;
  }

  &:focus {
    background: #6448d4;
    box-shadow: none;
    border-color: #6448d4;
    outline: unset;
  }

  &:disabled {
    background: #bbaaff;
    border-color: #bbaaff;
    cursor: not-allowed;

    &:hover {
      background: #bbaaff;
    }
  }
`;
