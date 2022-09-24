import { StyledSelectNFTProfileModal } from "./SelectNFTProfileModal.styled";
import CardGroup from "@/common/Card/Card";
import { useState, useEffect } from "react";
import useFetchNFT from "@/hooks/useFetchNFT";

function SelectNFTProfileModal() {
  const [myNFTList, setMyNFTList] = useState<string[]>([
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
    "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
  ]);
  // const { fetchMyNFT } = useFetchNFT();

  // const fetchMyNFTList = async () => {
  //   const NFTlist = await fetchMyNFT("0x8B80F8d86a337b45D9a717D4CC8048c58fe2a69b");
  //   setMyNFTList(NFTlist);
  // };

  // useEffect(() => {
  //   fetchMyNFTList();
  // }, []);

  const clickNFT = (event: React.MouseEvent) => {
    console.dir(event);
  };

  return (
    <StyledSelectNFTProfileModal shadow="shadow700" width="100%" direction="column">
      <CardGroup lst={myNFTList} onClick={clickNFT}></CardGroup>
    </StyledSelectNFTProfileModal>
  );
}

export default SelectNFTProfileModal;
