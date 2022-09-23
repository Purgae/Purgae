import useProvider from "./useProvider";
import { useMetaMask } from "metamask-react";
import { TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";
import { useAlertModal } from "./useAlertModal";

const useDonate = () => {
  const { contract, changeEtherToWei, networkChainId } = useProvider();
  const { chainId, switchChain } = useMetaMask();
  const { openAlertModal } = useAlertModal();

  const donate = ({ id, ether, address }: { id: number; ether: string; address: string }) => {
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
        } catch (error: any) {
          console.log(error);
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
        } catch (error: any) {
          console.log(error);
          if (error.message === "User rejected the request.") {
            const content = "네트워크 연결 요청을 거부하셨습니다.";
            openAlertModal({ content, styles: "DANGER" });
          }
        }
      })();
    }
  };

  return { donate };
};

export default useDonate;
