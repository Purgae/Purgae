import { useAppDispatch } from "@/hooks/storeHook";
import { loginAccountFetch } from "@/store/slices/authSlice";
import React from "react";
import Web3 from "web3";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
      <button
        onClick={() => {
          dispatch(loginAccountFetch())
            .then((res) => {
              console.log("res", res);
            })
            .catch((err) => {
              console.log("err", err);
            });
        }}
      >
        메타마스크
      </button>
    </div>
  );
};

export default Login;
