import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAction } from "../../Redux/actions";
export default function C1() {
  // const [counterState, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterReducer);

  const Increase = () => {
    const updateCounter = counter + 1;
    // setCounter(updateCounter);
    dispatch(increaseAction(updateCounter));
  };
  return (
    <div>
      <h1>Hello from c1 {counter}</h1>
      <button onClick={Increase}>Increase</button>
    </div>
  );
}
