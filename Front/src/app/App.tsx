import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Web3 from "web3";
import { useAppSelector } from "@/hooks/storeHook";

// 최상위 컴포넌트 :  최상위에 코드 추가
import { GlobalStyle } from "./styles";

import Login from "@/features/auth/login/Login";
import Home from "@/features/home/Home";
import Counter from "@/features/counter/Counter";
import { useWeb3React } from "@web3-react/core";

const ROPSTEN_URL = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

const App = () => {
  const { connector, library, chainId, account, active, error, activate, deactivate } = useWeb3React();

  return (
    <>
      {/* 글로벌-스타일-컴포넌트 위치 */}
      <GlobalStyle />
      <Routes>
        {/* 메인 페이지 입장하기 전 수족관 */}
        <Route path="/" />
        {/* 메인 페이지 */}
        <Route path="/main" element={<Home />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 개인 프로필 페이지 */}
        <Route path="/profile/:userId" />
        {/* 프로필 페이지 - 도감 상세 (id값으로 확인) */}
        <Route path="/profile/:userId/:id" />
        {/* 개인 수족관 */}
        <Route path="/profile/:userId/aquarium" />
        {/* 개인 팔로우/팔로워 */}
        <Route path="/profile/:userId/follow" />
        {/* 게임 */}
        <Route path="/game" />
        {/* 랭킹 */}
        <Route path="/ranking" />
        {/* 기부 */}
        <Route path="/donate" />
        {/* 자주 묻는 질문 */}
        <Route path="/faq" />
        <Route path="/faq/detail" />
        {/* Redux 테스트 페이지 */}
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
