import AlertModal from "@/common/AlertModal/AlertModal";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { useMetaMask } from "metamask-react";

export const WrongNetwork = () => {
  const { switchChain } = useMetaMask();

  return <button onClick={() => switchChain(networkChainId.ropsten)}>Switch to Ethereum Mainnet</button>;
};

export const networkChainId = {
  mainnet: "0x1", // 1
  // Test nets
  ropsten: "0x3", // 3
  rinkeby: "0x4", // 4
};
