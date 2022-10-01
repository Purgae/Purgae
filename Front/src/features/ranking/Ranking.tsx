import {
  RankingBackground,
  RankingBackgroundImage,
  RankingRootComponent,
  RankingTitleWrapper,
  RankingProomy,
  RankingSpeechBubble,
} from "./Ranking.styled";
import RankingList from "./components/RankingList/RankingList";

type Props = {};

const Ranking = (props: Props) => {
  return (
    <>
      <RankingBackground>
        <RankingBackgroundImage>
          <RankingRootComponent>
            <RankingTitleWrapper>
              <RankingProomy src={"/assets/proomy/logo.png"} />
              <RankingSpeechBubble>여러분의 기부 덕분에 해양 쓰레기가 줄고 있어요!</RankingSpeechBubble>
            </RankingTitleWrapper>
            <RankingList />
          </RankingRootComponent>
        </RankingBackgroundImage>
      </RankingBackground>
    </>
  );
};

export default Ranking;
