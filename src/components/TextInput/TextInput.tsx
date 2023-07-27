import {randomID} from "../../utils";
import * as S from "./TextInput.style";

type PropsType = {
  type?: "text" | "number" | "email" | "password";
  label?: string;
  error?: string;
  placeholder?: string;
};

export const TextInput = ({
  type = "text",
  label,
  error,
  ...rest
}: PropsType) => {
  const inputId = randomID();

  return (
    <S.InputContainer>
      {label && label.length > 0 && <label htmlFor={inputId}>{label}</label>}

      <S.InputWrapper
        $error={error && error.length > 0 ? true : false}
        type={type}
        id={inputId}
        {...rest}
      />

      {error && error.length > 0 && <p className="error">{error}</p>}
    </S.InputContainer>
  );
};
