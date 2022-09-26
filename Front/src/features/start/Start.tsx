import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Button } from "./Start.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";

import { TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";

const Start = () => {
  const [loading, setLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const { fetchTodayNFT, fetchMyNFT } = useFetchNFT();

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/main");
  };

  // 물고기가 한마리도 없을 경우 defaultImage를 보여준다.
  const defaultImage = ["http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7"];

  // const fetchNFTList = async () => {
  //   const myNFTList = await fetchTodayNFT();
  //   if (myNFTList.length === 0) {
  //     setFishImages(defaultImage);
  //   } else {
  //     setFishImages(myNFTList);
  //   }
  //   setLoading(false);
  // };

  const fetchNFTList = async () => {
    const myNFTList = await fetchMyNFT("0x8B80F8d86a337b45D9a717D4CC8048c58fe2a69b");
    setFishImages(myNFTList);
    setLoading(false);
  };

  useEffect(() => {
    fetchNFTList();
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <Div>
          <Button fontSize="1.25rem" width="10rem" bgColor="white" fontColor="lightBlue600" onClick={navigateHome}>
            시작하기
          </Button>
          <Aquarium fishImages={fishImages} />
        </Div>
      )}
    </>
  );
};

export default Start;
