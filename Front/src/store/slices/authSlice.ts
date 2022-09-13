import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// https://redux-toolkit.js.org/tutorials/rtk-query

type Auth = {
  userInfo: {
    account: string;
  },
  connectedMetamask: boolean;
}

const initialState: Auth = {
  userInfo:{
    account : '',
  },
  connectedMetamask: false,
}


// 0.1초마다 한번씩, 계좌연결이 맞는지 확인해야함.

// 메타마스크 설치여부
// 메타마스크 설치O -> 메타마스크 로그인하도록 띄워줌
export const connectAccount = createAsyncThunk(
  'auth/login',
  async() => {
    try{
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // -> window.ethereum.request 찍어보기
        // console.log(accounts) 
        initialState.userInfo.account = accounts[0];
        initialState.connectedMetamask
      } else {
        alert("Install Metamask!");
      }
    }catch (error) {
      console.error(error); 
    }
  }
)


// 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:{}
})

export default authSlice.reducer