import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserTokenStructure } from "./types";

const initialUserState: UserStateStructure = {
  id: "",
  name: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserStateStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
