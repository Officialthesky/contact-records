import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreaseAction } from "../../Redux/actions";
export default function C4() {
  const { counter } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const Decrease = () => {
    const updateCounter = counter - 1;
    // setCounter(updateCounter);
    dispatch(decreaseAction(updateCounter));
  };
  return (
    <div>
      <h1>Hello from c1 {counter}</h1>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}
