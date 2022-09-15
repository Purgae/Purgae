import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// https://redux-toolkit.js.org/tutorials/rtk-query

// * state의 타입을 지정한다.
type Auth = {
  userInfo: {
    account: string;
  };
  connectedMetamask: boolean;
};

// * state의 초기값을 지정한다.
const initialState: Auth = {
  userInfo: {
    account: "",
  },
  connectedMetamask: false,
};

// 0.1초마다 한번씩, 계좌연결이 맞는지 확인해야함.
// 메타마스크가 있으면서 계정연결 안되있다면 로그인 버튼 보이게 하기

// 메타마스크 설치여부
// 메타마스크 설치O -> 메타마스크 로그인하도록 띄워줌
export const connectAccount = createAsyncThunk("auth/login", async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // -> window.ethereum.request 찍어보기
      // console.log(accounts)
      initialState.userInfo.account = accounts[0];
      initialState.connectedMetamask;
    } else {
      alert("Install Metamask!");
    }
  } catch (error) {
    console.error(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
