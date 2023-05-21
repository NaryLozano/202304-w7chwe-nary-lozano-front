import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import useUser from "../../hooks/useUser";

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { getUserToken } = useUser();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginData({ username: "", password: "" });
    await getUserToken(loginData);
  };
  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };
  return (
    <LoginFormStyled>
      <img src="./logo.png" alt="The social network logotype" />
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="form__button">Login</button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
