import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };
  return (
    <LoginFormStyled>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__user"
          placeholder="Username"
          id="username"
          onChange={onChangeLogin}
        />
        <input
          type="text"
          className="form__password"
          placeholder="Password"
          id="password"
          onChange={onChangeLogin}
        />
        <button className="form__button">Login</button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
