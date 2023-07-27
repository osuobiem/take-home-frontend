import {SyntheticEvent, useState} from "react";
import {Alert} from "../../components/Alert/Alert";
import {Button} from "../../components/Button/Button";
import {Card} from "../../components/Card/Card";
import {TextInput} from "../../components/TextInput/TextInput";
import * as S from "./Login.style";
import {validate} from "./Login.validator";
import {formErrorHandler} from "../../utils";
import {useLoginMutation} from "../../api/mutations/login";
import {ButtonLoader} from "../../components/Button/ButtonLoader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({email: "", password: ""});
  const [reqError, setReqError] = useState("");

  const {mutate, isLoading, isError} = useLoginMutation();

  const resetErrors = (emptyErr: {email?: string; password?: string}) => {
    setFormErrors({...formErrors, ...emptyErr});
    setReqError("");
  };

  const submitAction = async (e: SyntheticEvent) => {
    e.preventDefault();

    const validateForm = validate({email, password});

    if (validateForm.error) {
      setFormErrors({...formErrors, ...formErrorHandler(validateForm.error)});
    } else {
      mutate(
        {
          email,
          password,
        },
        {
          onSuccess: () => location.assign("/"),
          onError: (error) => {
            // @ts-ignore
            setReqError(error.message);
          },
        }
      );
    }
  };

  return (
    <S.Container>
      <Card>
        <S.HeaderText>Login</S.HeaderText>

        <form onSubmit={submitAction}>
          <Alert
            type="error"
            float={false}
            content={reqError}
            show={isError && reqError.length ? true : false}
          />
          <TextInput
            type="email"
            placeholder="Enter your email address"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required={true}
            error={formErrors.email}
            onKeyDown={() => resetErrors({email: ""})}
            disabled={isLoading}
          />
          <TextInput
            type="password"
            placeholder="Enter your password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required={true}
            error={formErrors.password}
            onKeyDown={() => resetErrors({password: ""})}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <ButtonLoader /> : "Login"}
          </Button>
        </form>
      </Card>
    </S.Container>
  );
};
