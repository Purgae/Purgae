import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useLoginMutation } from "@/redux/api/authApi";
import "./counter.css";
import Card from "@/common/Card/Card";
import EditProfileModal from "@/features/profile/components/EditProfileModal/EditProfileModal";

// const [fetchCoinPrice] = useLazyFetchCoinPriceQuery();
// * action creator, selector를 import한다.

import { selectCounter, increment, decrement } from "@/redux/slices/counterSlice";
import { selectModal, openEditProfile } from "@/redux/slices/modalSlice";
import { useAlertModal, OpenAlertModalArg } from "@/hooks/useAlertModal";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useGetGameRankingQuery } from "@/redux/api/gameRankingApi";

import useEtherToTrash from "@/hooks/useEtherToTrash";

// * props를 넘긴다면 props 타입을 지정한다.
interface TestProps {}

// * 함수형 컴포넌트
const Counter = (props: TestProps) => {
  const dispatch = useAppDispatch();
  const { changeEtherToTrash } = useEtherToTrash();

  const [NFTList, setNFTList] = useState<string[]>([]);
  const [modalState, toggleModal] = useState<boolean>(false);

  const [login] = useLoginMutation();

  const { openAlertModal } = useAlertModal();

  const { fetchMyNFT } = useFetchNFT();

  const clickHandler = () => {
    login({ walletAddress: "0x123123", nft: [] });
  };

  const showAlertModal = () => {
    const data: OpenAlertModalArg = { content: "오류가 발생했다는 테스트를 하고 있습니다", styles: "DANGER" };
    openAlertModal(data);
  };

  const clickNFTList = async () => {
    const myNFTList = await fetchMyNFT("0x8B80F8d86a337b45D9a717D4CC8048c58fe2a69b");
    setNFTList(myNFTList);
  };

  const { editProfile } = useAppSelector(selectModal);

  const clickModalToggle = () => {
    dispatch(openEditProfile());
  };

  const fetchCoin = () => {
    console.log(changeEtherToTrash(0.0025));
  };

  const el = document.getElementById("modal")!;
  return (
    <Fragment>
      <section className="counter-section">
        <h1>API TEST</h1>
        <button onClick={clickHandler}>API TEST</button>
      </section>
      <section className="counter-section">
        <h1>Alert Test</h1>
        <button onClick={showAlertModal}>Alert Test</button>
      </section>
      <section className="counter-section">
        <h1>NFT Test</h1>
        <button onClick={clickNFTList}>NFTLIST</button>
        {/* <>{generateFish}</> */}
        {NFTList.map((item, index) => {
          return <img src={item} key={index} />;
        })}
      </section>
      <section className="counter-section">
        <h1>ModalTest</h1>z<button onClick={clickModalToggle}>toggle모달</button>
        {editProfile && createPortal(<EditProfileModal />, el)}
      </section>
      <section className="counter-section">
        <h1>함수 체크</h1>
        <button onClick={fetchCoin}>toggle모달</button>
      </section>
    </Fragment>
  );
};

export default Counter;
