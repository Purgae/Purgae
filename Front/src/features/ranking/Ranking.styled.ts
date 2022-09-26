import styled from "@/styles/theme-components";
import BackgroundImg from "/assets/MainPage/background_top.png";

export const BgImg = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${BackgroundImg})`,
  backgroundSize: "100%",
}));

// export const RankingProomy = styled.div(({ theme }) => ({
//   width: "100%",
//   height: "100%",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${BackgroundImg})`,
//   backgroundSize: "100%",
// }));
