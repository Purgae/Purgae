import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { PageNationBg, PageNationBtn } from "./PageNation.styled";
import { PageNationProps } from "./PageNation.types";
import useInterval from "@/hooks/useInterval";

const PageNation = ({ selectPage, setSelectPage, lst, ...props }: React.PropsWithChildren<PageNationProps>) => {
  const [numLst, setNumList] = useState<number[]>([]); //[0, 1, 2, 3, 4, 5]
  const [selectNumLst, setSelectNumList] = useState<number[]>([0, 1, 2]); //[0, 1, 2], [3, 4, 5]
  const [maxPage, setMaxPage] = useState<number>(0);

  const setPage = () => {
    if (lst && !isEmpty(lst)) {
      setMaxPage(Math.floor(lst.length / 12));
      let tmpNumLst: number[] = [];
      for (let i = 0; i < lst.length / 12; i++) {
        tmpNumLst.push(i);
      }
      setNumList(tmpNumLst);
    } else {
      setMaxPage(0);
      setNumList([]);
    }
  };

  useInterval(() => {
    setPage();
  }, 100);

  useInterval(() => {
    setSelectNumList(numLst.slice(Math.floor(selectPage / 3) * 3, Math.floor(selectPage / 3) * 3 + 3));
  }, 100);

  useEffect(() => {
    setPage();
  }, [selectPage]);

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
