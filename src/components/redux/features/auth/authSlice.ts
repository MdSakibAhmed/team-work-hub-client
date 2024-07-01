
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define a type for the slice state
type TAuthState = {
  user: null | { email: string; userId: string,username:string };
  token: null | string;
}

// Define the initial state using that type
const initialState: TAuthState = { 
  user: null,
  token: null,
};

export const counterSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction< typeof initialState.user | null>
    ) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<typeof initialState.token>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logOut } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user;

export const selectToken = (state: RootState) => state.auth.token;

export default counterSlice.reducer;
