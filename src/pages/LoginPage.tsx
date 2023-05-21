import LoginForm from "../components/LoginForm/LoginForm.js";
import LoginPageStyled from "./LoginPageStyled.js";

const LoginFormPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm></LoginForm>{" "}
    </LoginPageStyled>
  );
};

export default LoginFormPage;
