import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";

export const StyledNFTListModalContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.mainModalBg};
  padding-top: 4rem;
`;

export const StyleNFTListModalBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  row-gap: 3rem;
  column-gap: 2rem;
  width: 100%;
  border-radius: 1rem;
  font-size: 1rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }
`;

export const StyledNFTListModalCard = styled(FlexDiv)`
  width: 100%;
`;

export const StyledNFTListImg = styled.div<{ img: string }>`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.primary300};
  border-radius: 0.3rem;
`;

export const StyledNFTListContent = styled(FlexDiv)``;
