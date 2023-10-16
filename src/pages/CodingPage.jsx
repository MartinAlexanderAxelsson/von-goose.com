import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Coding from "../components/Coding";
import CodingMobile from "../components/CodingMobile";
import "./styles/codingPage.scss";

export default function CodingPage() {
  const [mediaQuery, setMediaQuery] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) {
      setMediaQuery(true);
    } else {
      setMediaQuery(false);
    }
  }, []);

  return (
    <>
      <header className="header-coding">
        <div>
          <Link className="header-coding__homelink" to={"/"}>
            &#60;------
          </Link>
        </div>
        <div className="header-coding__container">
          <div className="header-coding__container__C">/C/</div>
          <div className="header-coding__container__O">/O/</div>
          <div className="header-coding__container__D">/D/</div>
          <div className="header-coding__container__I">/I/</div>
          <div className="header-coding__container__N">/N/</div>
          <div className="header-coding__container__G">/G/</div>
        </div>
        <div></div>
      </header>

      {mediaQuery ? <CodingMobile /> : <Coding />}
    </>
  );
}
