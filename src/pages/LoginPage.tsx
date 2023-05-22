import LoginForm from "../components/LoginForm/LoginForm.js";
import useUser from "../hooks/useUser.js";
import UserCredentials from "../types.js";
import LoginPageStyled from "./LoginPageStyled.js";

const LoginFormPage = (): JSX.Element => {
  const { getUserToken } = useUser();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    localStorage.setItem("token", token);
  };

  return (
    <LoginPageStyled>
      <LoginForm loginSubmitForm={handleFormSubmit} />
    </LoginPageStyled>
  );
};

export default LoginFormPage;
