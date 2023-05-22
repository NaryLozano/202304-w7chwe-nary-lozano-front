import LoginForm from "../components/LoginForm/LoginForm.js";
import useUser from "../hooks/useUser.js";
import { useAppDispatch } from "../store/index.js";
import useToken from "../store/token/useToken.js";
import { loginUserActionCreator } from "../store/users/usersSlice.js";
import UserCredentials from "../types.js";
import LoginPageStyled from "./LoginPageStyled.js";

const LoginFormPage = (): JSX.Element => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    localStorage.setItem("token", token);

    const userData = getTokenData(token);

    dispatch(loginUserActionCreator(userData));
  };

  return (
    <LoginPageStyled>
      <LoginForm loginSubmitForm={handleFormSubmit} />
    </LoginPageStyled>
  );
};

export default LoginFormPage;
