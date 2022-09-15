import React from "react";
import Web3 from "web3";

type Props = {};

const Login = (props: Props) => {
  const intoLogin = () => {};
  return (
    <div>
      {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
      <button onClick={intoLogin}>메타마스크</button>
      <button>싸피월렛</button>
    </div>
  );
};

export default Login;
