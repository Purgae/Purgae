import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Web3 from "web3";
import { useAppSelector } from "../hooks/storehooks";


// 최상위 컴포넌트 :  최상위에 코드 추가 
import { GlobalStyle } from "./styles";


import Login from "@/features/auth/login/Login";
import Home from "@/features/home/Home";


const ROPSTEN_URL = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';



const App = () => {


  return (
    <>
    {/* 글로벌-스타일-컴포넌트 위치 */}
    <GlobalStyle /> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;