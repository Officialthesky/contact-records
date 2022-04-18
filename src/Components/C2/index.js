import React from "react";
import { useSelector } from "react-redux";

export default function C2() {
  const { counter } = useSelector((state) => state.counterReducer);

  return <h1>Hello from c2 {counter}</h1>;
}
