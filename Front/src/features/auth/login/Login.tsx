import { useAppDispatch } from "@/hooks/storeHook";
import { RopstenUrl } from "@/utils/MetaEnv";

import Web3 from "web3";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const web3 = new Web3(new Web3.providers.HttpProvider(RopstenUrl));
  console.log(web3);

  return (
    <div>
      {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
      <button>메타마스크</button>
    </div>
  );
};

export default Login;
