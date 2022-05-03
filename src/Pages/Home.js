import React from "react";
import Contactlist from "../Components/Contactlist";
import Header from "../Components/Header";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Contactlist />
    </div>
  );
}
