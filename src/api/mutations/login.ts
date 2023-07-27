import {useMutation} from "react-query";
import {login} from "../../services/firebaseAuth";

export const useLoginMutation = () =>
  useMutation(
    "login-mutation",
    (data: {email: string; password: string}) =>
      login(data.email, data.password),
    {
      retry: false,
    }
  );
