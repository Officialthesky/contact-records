import React from "react";
import { useSelector } from "react-redux";

export default function C3() {
  const { counter } = useSelector((state) => state.counterReducer);

  return <h1>Hello from c3 {counter}</h1>;
}
