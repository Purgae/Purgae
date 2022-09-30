import useProvider from "./useProvider";
import { useMetaMask } from "metamask-react";
import { TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";
import { useAlertModal } from "./useAlertModal";
import { useSucceedToDonateMutation } from "@/redux/api/nftApi";
import { useAppDispatch } from "@/hooks/storeHook";
import { offModal } from "@/redux/slices/donateSlice";

const useDonate = () => {
  const { contract, changeEtherToWei, networkChainId } = useProvider();
  const { chainId, switchChain } = useMetaMask();
  const { openAlertModal } = useAlertModal();
  const [succeedToDonate] = useSucceedToDonateMutation();
  const dispatch = useAppDispatch();

  const donate = ({ uid, id, ether, address }: { uid: number; id: number; ether: string; address: string }) => {
    const wei = changeEtherToWei(ether);
    const transactionObject = {
      from: address,
      value: wei,
    };

    if (chainId !== networkChainId.goerli) {
      (async () => {
        try {
          await switchChain(networkChainId.goerli);
          await contract.methods.transferNFT(id, TEST_WALLET_ADDRESS, address).send(transactionObject);
          await succeedToDonate({ userId: uid, nftId: id });
        } catch (error: any) {
          dispatch(offModal());
          console.error(error);
          if (error.message === "User rejected the request.") {
            const content = "네트워크 연결 요청을 거부하셨습니다.";
            openAlertModal({ content, styles: "DANGER" });
          }
        }
      })();
    } else {
      (async () => {
        try {
          await contract.methods.transferNFT(id, TEST_WALLET_ADDRESS, address).send(transactionObject);
          await succeedToDonate({ userId: uid, nftId: id });
        } catch (error: any) {
          dispatch(offModal());
          console.error(error);
          if (error.message === "User rejected the request.") {
            const content = "네트워크 연결 요청을 거부하셨습니다.";
            openAlertModal({ content, styles: "DANGER" });
          }
          if (error.message === "MetaMask Tx Signature: User denied transaction signature.") {
            const content = "기부를 마무리하려면 거래를 완료해주세요.";
            openAlertModal({ content, styles: "RED" });
          }
        }
      })();
    }
  };

  return donate;
};

export default useDonate;
