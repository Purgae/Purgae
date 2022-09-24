import React from "react";
import { PageNationProps } from "./PageNation.types";
type Props = {};

const PageNation = ({ selectPage, setSelectPage, ...props }: React.PropsWithChildren<PageNationProps>) => {
  // 각 컴포넌트 크기 맞춰서 그대로 넣기

  return (
    <div>
      <div onClick={() => setSelectPage(1)}>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default PageNation;
