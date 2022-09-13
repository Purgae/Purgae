import React from 'react'
import Web3 from "web3";

type Props = {}

const Login = (props: Props) => {
  const intoLogin = () => {
    /**
     * 1. 메타마스크  되어있는지 확인
     * 2-2. 비로그인 시... store로 상태관리를 해야 할듯
     *     1. 
     * 2-1. 로그인 되어있을 시
     */
  }
  return (
    <div>
      {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
      {/*  */}
      <button onClick={intoLogin}>기부 및 로그인</button>
    </div>
  )
}

export default Login