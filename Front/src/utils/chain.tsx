import AlertModal from "@/common/AlertModal/AlertModal";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { useMetaMask } from "metamask-react";

export const WrongNetwork = () => {
  const { switchChain } = useMetaMask();

  // const { openAlertModal } = useAlertModal();
  // const showAlertModal = () => {
  //   const data: OpenAlertModalArg = { content: "Ropsten Test Network로 변경해주세요", styles: "RED" };
  //   openAlertModal(data);
  // };
  // Request a switch to Ethereum Mainnet

  return <button onClick={() => switchChain(networkChainId.ropsten)}>Switch to Ethereum Mainnet</button>;
};

export const networkChainId = {
  mainnet: "0x1", // 1
  // Test nets
  ropsten: "0x3", // 3
  rinkeby: "0x4", // 4
};
