import {
  InitialUserStateMock,
  userMock,
  userWithTokenMock,
} from "../../mocks/mocks.js";
import { loginUserActionCreator, userReducer } from "./usersSlice";

describe("Given a userReducer", () => {
  describe("when it receives an empty user state and a loginUser action with an user ", () => {
    test("Then it should return the new state of the user  ", () => {
      const expectedNewUserState = userMock;

      const currentUserState = InitialUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userWithTokenMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
