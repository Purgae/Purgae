import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// https://redux-toolkit.js.org/tutorials/rtk-query

// * state의 타입을 지정한다.
type Auth = {
  userInfo: {
    account: string;
  };
  connectedMetamask: boolean;
  status: string;
};

// * state의 초기값을 지정한다.
const initialState: Auth = {
  userInfo: {
    account: "",
  },
  connectedMetamask: false,
  status: "idle", // 'idle' (휴) | 'loading' | 'succeeded' | 'failed'
};

// 메타마스크 설치여부
// 메타마스크 설치O -> 메타마스크 로그인하도록 띄워줌
export const loginAccountFetch = createAsyncThunk("auth/login", async (role, { rejectWithValue }) => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // -> window.ethereum.request 찍어보기
      console.log(window.ethereum.request);
      initialState.userInfo.account = accounts[0];
      initialState.connectedMetamask;
    } else {
      alert("Install Metamask!");
    }
  } catch (error) {
    console.error("error", error);
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAccountFetch.fulfilled, (state, action) => {
      console.log("login-action", action);
      state.connectedMetamask = true;
    });
  },
});

export default authSlice.reducer;
