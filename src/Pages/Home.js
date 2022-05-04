import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import ContactList from "../Components/Contactlist";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <ContactList />
    </div>
  );
}
