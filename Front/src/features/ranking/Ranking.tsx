import {
  RankingBackground,
  RankingBackgroundImage,
  RankingRootComponent,
  RankingTitleWrapper,
  RankingProomy,
  RankingSpeechBubble,
} from "./Ranking.styled";
import RankingList from "./components/RankingList/RankingList";
import TopButton from "@/common/TopButton/TopButton";

type Props = {};

const Ranking = (props: Props) => {
  return (
    <>
      <RankingBackground>
        <RankingBackgroundImage>
          <RankingTitleWrapper>
            <RankingProomy src={"/assets/proomy/logo.png"} />
            <RankingSpeechBubble>여러분의 기부 덕분에 해양 쓰레기가 줄고 있어요!</RankingSpeechBubble>
          </RankingTitleWrapper>
        </RankingBackgroundImage>
        <RankingRootComponent>
          <RankingList />
        </RankingRootComponent>
      </RankingBackground>
      <TopButton />
    </>
  );
};

export default Ranking;
