import { FlexDiv } from "@/common/Common.styled";
import styled from "@/styles/theme-components";

export const FaqTextProomyWrapper = styled.div<{ justify: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: start;
  width: 42rem;
  & > * {
    animation: fadein 0.5s;
    @keyframes fadein {
      from {
        opacity: 0.3;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const FaqTextBox = styled(FlexDiv)`
  min-height: 5rem;
  width: 30rem;
  padding: 1.25rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  transition: all 0.3s linear;
  white-space: pre-line;
  text-align: center;
  line-height: 1.5rem;
  &:hover {
    transform: scale(1.02);
  }
`;

export const FaqProomy = styled.img`
  width: 6rem;
  padding: 0.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.02);
  }
`;
