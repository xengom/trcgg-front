import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Trc.module.css";

const MainHeader = () => {
  return (
    <div className={style.align_right}>
      <Link to="/test">test</Link>
    </div>
  )
}

export default MainHeader;