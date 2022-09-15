import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import "./counter.css";

// * action creator, selector를 import한다.
import { selectCounter, increment, decrement } from "@/redux/slices/counterSlice";

// * props를 넘긴다면 props 타입을 지정한다.
interface TestProps {}

// * 함수형 컴포넌트
const Counter = (props: TestProps) => {
  //* hooks에 정의한 useAppSelector함수를 이용하여 State를 가져온다.
  //* useSelector()함수 대신에 사용한다.
  const { counter } = useAppSelector(selectCounter);

  // * hooks에 정의한 useAppDispatch()함수를 재 정의 한다.
  // * useDispatch()함수 대신에 사용한다.
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const clickHandler = () => {
    login({ walletAddress: "0x123123", nft: [{ hash: "123123" }] });
  };

  return (
    <Fragment>
      <section className="counter-section">
        <h1>Redux TEST</h1>
        <div> {counter} </div>
        {/* acion 크리에이터를 활용하여 action을 dispatch한다! */}
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <button onClick={() => dispatch(decrement(5))}>-5</button>
      </section>
      <section className="counter-section">
        <h1>API TEST</h1>
        <button onClick={clickHandler}>API TEST</button>
      </section>
    </Fragment>
  );
};

export default Counter;
