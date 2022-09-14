import Login from "@/features/auth/login/Login";
import Home from "@/features/home/Home";
import Counter from "@/features/counter/Counter";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Web3 from "web3"
import { useAppSelector } from "@/hooks/storeHooks";

const ROPSTEN_URL =
  "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

const App = () => {
  // https://redux-toolkit.js.org/tutorials/typescript
  // const account = useAppSelector(state => state.auth.userInfo.account)

  // todo. 실행시, 크립토좀비 참고
  // // - metamask검사

  useEffect(() => {
    // getAccount();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
