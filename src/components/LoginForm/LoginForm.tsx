import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import UserCredentials from "../../types";

interface LoginFormProps {
  loginSubmitForm: (user: UserCredentials) => void;
}

const LoginForm = ({ loginSubmitForm }: LoginFormProps): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginSubmitForm(loginData);
    setLoginData({ username: "", password: "" });
  };

  return (
    <>
      <img src="./logo.png" alt="The social network logotype" />
      <LoginFormStyled className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__user"
          placeholder="Username"
          id="username"
          onChange={onChangeLogin}
          autoComplete="off"
        />
        <input
          type="password"
          className="form__password"
          placeholder="Password"
          id="password"
          onChange={onChangeLogin}
          autoComplete="off"
        />
        <button
          className="login-form__button"
          disabled={loginData.username === "" && loginData.password === ""}
        >
          Login
        </button>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
