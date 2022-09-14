import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";

// * action creator, selector를 import한다.
import { selectCounter, increment, decrement } from "@/store/slices/counterSlice";

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

  return (
    <Fragment>
      <h1>Test</h1>
      <div> {counter} </div>
      {/* action 크리에이터를 활용하여 action을 dispatch한다! */}
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
    </Fragment>
  );
};

export default Counter;
