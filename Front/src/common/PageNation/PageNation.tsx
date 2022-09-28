import { isEmpty } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { PageNationBg, PageNationBtn } from "./PageNation.styled";
import { PageNationProps } from "./PageNation.types";

const PageNation = ({ selectPage, setSelectPage, lst, ...props }: React.PropsWithChildren<PageNationProps>) => {
  const [numLst, setNumList] = useState<number[]>([]); //[0, 1, 2, 3, 4, 5]
  const [selectNumLst, setSelectNumList] = useState<number[]>([0, 1, 2]); //[0, 1, 2], [3, 4, 5]
  const [maxPage, setMaxPage] = useState<number>(0);

  useEffect(() => {
    if (lst && !isEmpty(lst)) {
      setMaxPage(Math.floor(lst.length / 12));
      let tmpNumLst: number[] = [];
      for (let i = 0; i < lst.length / 12; i++) {
        tmpNumLst.push(i);
      }
      console.log(tmpNumLst);
      setNumList(tmpNumLst);
    } else {
      setMaxPage(0);
      setNumList([]);
    }
  }, [lst]);

  useEffect(() => {
    if (!isEmpty(lst)) {
    } else {
    }
  }, [lst]);

  console.log(numLst);

  useEffect(() => {
    setSelectNumList(numLst.slice(Math.floor(selectPage / 3) * 3, Math.floor(selectPage / 3) * 3 + 3)); // 0, 1, 2
    console.log(numLst);
  }, [lst]);

  return (
    <PageNationBg>
      <PageNationBtn onClick={() => setSelectPage(selectPage - 1)} disabled={selectPage === 0}>
        &lt;
      </PageNationBtn>
      {selectNumLst.map((num, idx) => (
        <PageNationBtn key={idx} onClick={() => setSelectPage(num)} disabled={selectPage === num}>
          {num + 1}
        </PageNationBtn>
      ))}
      <PageNationBtn onClick={() => setSelectPage(selectPage + 1)} disabled={selectPage === maxPage}>
        &gt;
      </PageNationBtn>
    </PageNationBg>
  );
};

export default PageNation;
