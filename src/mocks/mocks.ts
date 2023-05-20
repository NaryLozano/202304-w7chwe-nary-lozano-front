import { UserStateStructure } from "../store/users/types";

export const userMock: UserStateStructure = {
  isLogged: true,
  id: "123",
  name: "Juds",
  token: "meowmeowmeow",
};

export const userWithTokenMock: UserStateStructure = {
  ...userMock,
  isLogged: true,
};

export const InitialUserStateMock: UserStateStructure = {
  isLogged: false,
  name: "",
  id: "",
  token: "",
};
