import {Button} from "../../components/Button/Button";
import {Card} from "../../components/Card/Card";
import {TextInput} from "../../components/TextInput/TextInput";
import * as S from "./Login.style";

export const Login = () => {
  return (
    <S.Container>
      <Card>
        <S.HeaderText>Login</S.HeaderText>

        <TextInput
          type="email"
          placeholder="Enter your email address"
          label="Email address"
        />

        <TextInput
          type="password"
          placeholder="Enter your password"
          label="Password"
        />

        <Button>Login</Button>
      </Card>
    </S.Container>
  );
};
