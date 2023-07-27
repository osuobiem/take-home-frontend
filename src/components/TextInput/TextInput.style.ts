import {styled} from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  & > label {
    color: #1d2939;
    font-size: 14px;
    margin-bottom: 4px;
  }

  & > p.error {
    color: #f04438;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const InputWrapper = styled.input<{$error: boolean}>`
  border: solid ${({$error}) => ($error ? "#f04438" : "#EAECF0")};
  border-radius: 16px;
  padding: 16px 24px;
  color: #1d2939;
  font-size: 16px;

  &:focus,
  &:focus-visible {
    border-color: #7856ff;
    outline: unset;
  }

  &::placeholder {
    color: #667085;
  }
`;
