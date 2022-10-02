import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Button, Description1, Description2, Description3 } from "./Start.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";

const Start = () => {
  const [loading, setLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const [isDisplay1, setIsDisplay1] = useState(false);
  const [isDisplay2, setIsDisplay2] = useState(false);
  const [isDisplay3, setIsDisplay3] = useState(false);
  const { fetchTodayNFT } = useFetchNFT();

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/main");
  };

  // 물고기가 한마리도 없을 경우 defaultImage를 보여준다.
  const defaultImage = ["http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7"];

  const fetchNFTList = async () => {
    const myNFTList = await fetchTodayNFT();
    if (myNFTList.length === 0) {
      setFishImages(defaultImage);
    } else {
      setFishImages(myNFTList);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNFTList();
    setIsDisplay1(true);
    setTimeout(() => {
      setIsDisplay2(true);
    }, 3000);
    setTimeout(() => {
      setIsDisplay2(false);
      setIsDisplay3(true);
    }, 6000);
    setTimeout(() => {
      setIsDisplay3(false);
      setIsDisplay1(false);
    }, 9000);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <Div>
          <Description1 isDisplay={isDisplay1}>오늘 구조된 해양 친구들이에요! є(･Θ･｡)э››~♡</Description1>
          <Description2 isDisplay={isDisplay2}>마우스로 수족관을 클릭해보세요!</Description2>
          <Description3 isDisplay={isDisplay3}>뮤직 Play!</Description3>
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
