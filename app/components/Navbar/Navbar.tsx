import React from "react";
import TopNav from "./components/TopNav";
import CenterNav from "./components/CenterNav";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <div className={style.navContainer}>
      <TopNav />
      <CenterNav />
    </div>
  )
}

export default Navbar