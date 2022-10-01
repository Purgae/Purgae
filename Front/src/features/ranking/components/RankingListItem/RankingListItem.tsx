import styled from "@/styles/theme-components";
import { FlexDiv } from "@/common/Common.styled";
import ProfileImage from "@/common/ProfileImage/ProfileImage";

const RankingListItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.75fr;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white400};
`;

const RankingListItemNickname = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
`;

const RankingContentDeatilWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 0.5rem;
  gap: 0.5rem;
`;

const RankingProfileWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 10rem;
`;

const RankingListItemContent = styled.p`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
  width: 100%;
  text-align: left;
`;

const RankingListItemNumber = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "700")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
  padding: 0.5rem;
`;

const RankingContentIcon = styled.div<{ color: string }>`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  color: ${(props) => props.color};
`;

const RankingListItem = () => {
  return (
    <RankingListItemWrapper>
      <RankingListItemNumber>1</RankingListItemNumber>
      <RankingProfileWrapper>
        <ProfileImage size="navBar" />
        <RankingListItemNickname>김물고기김물고기</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#90e3ff">
            public
          </RankingContentIcon>
          100ETH
        </RankingListItemContent>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#2A2A2A">
            delete
          </RankingContentIcon>
          1.1234t
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default RankingListItem;
