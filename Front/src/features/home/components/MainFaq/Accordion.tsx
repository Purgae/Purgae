import React from "react";
import styled from "@/styles/theme-components";

const MainFaqTextBox = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  width: 40rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  & > * {
    ${({ theme }) => theme.mixins.font("0.9rem", "500")};
    color: ${({ theme }) => theme.colors.gray300};
    line-height: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    width: 20rem;
    & > div,
    button {
      font-size: 0.6rem;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 2rem;
  margin: 0 2rem 0 0.5rem;
`;

const Button = styled.div`
  top: 1rem;
  right: 1rem;
  position: absolute;
`;

const ContentsWrapper = styled.div`
  height: 0;
  padding: 0 0.5rem;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  title?: string | React.ReactNode;
  contents?: string | React.ReactNode;
};

const Accordion = (props: Props) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event: any) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText =
    parentRefHeight === "0px" ? (
      <div className="material-icons">keyboard_arrow_right</div>
    ) : (
      <div className="material-icons">keyboard_arrow_up</div>
    );

  return (
    <MainFaqTextBox>
      <Header onClick={handleButtonClick}>
        {props.title}
        <Button>{buttonText}</Button>
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{props.contents}</Contents>
      </ContentsWrapper>
    </MainFaqTextBox>
  );
};

export default React.memo(Accordion);
