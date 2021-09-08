import React from "react";
import { Link } from "react-router-dom";
import v from "../images/v.png";
import o1 from "../images/1o.png";
import n from "../images/n.png";
import g from "../images/g.png";
import o2 from "../images/2o.png";
import o3 from "../images/3o.png";
import s from "../images/s.png";
import e from "../images/e.png";

export default function LettersBlue() {
  return (
    <>
      <div className="letters-container">
        <Link className="letters-container__link-container" to="/heartbeat">
          <img
            src={v}
            className="letters-container__link-container__letter1"
            alt=""
          ></img>
        </Link>

        <a
          className="letters-container__link-container"
          href="https://www.youtube.com/watch?v=dn1GYQwSBog"
        >
          <img
            src={o1}
            className="letters-container__link-container__letter2"
            alt=""
          ></img>
        </a>

        <a
          className="letters-container__link-container"
          href="http://zoomquilt.org/"
        >
          <img
            src={n}
            className="letters-container__link-container__letter3"
            alt=""
          ></img>
        </a>

        <Link className="letters-container__link-container" to="/tape">
          <img
            src={g}
            className="letters-container__link-container__letter4"
            alt=""
          ></img>
        </Link>

        <a
          className="letters-container__link-container"
          href="https://mandel.gart.nz"
        >
          <img
            src={o2}
            className="letters-container__link-container__letter5"
            alt=""
          ></img>
        </a>

        <a
          className="letters-container__link-container"
          href="https://earth.nullschool.net/"
        >
          <img
            src={o3}
            className="letters-container__link-container__letter6"
            alt=""
          ></img>
        </a>

        <Link className="letters-container__link-container" to="/message">
          <img
            src={s}
            className="letters-container__link-container__letter7"
            alt=""
          ></img>
        </Link>

        <Link className="letters-container__link-container" to="/static">
          <img
            src={e}
            className="letters-container__link-container__letter8"
            alt=""
          ></img>
        </Link>
      </div>
    </>
  );
}
