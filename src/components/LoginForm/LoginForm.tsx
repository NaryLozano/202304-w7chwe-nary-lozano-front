import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import useUser from "../../hooks/useUser";

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { getUserToken } = useUser();

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData({ username: "", password: "" });
    await getUserToken(loginData);
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
