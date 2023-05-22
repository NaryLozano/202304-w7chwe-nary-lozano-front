import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 30px 0px;
  gap: 20px;

  input {
    padding: 18px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 3px #d3d0d0;
  }

  .login-form {
    &__button {
      padding: 18px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      color: #b22222;
      font-weight: bold;
    }
  }
`;

export default LoginFormStyled;
