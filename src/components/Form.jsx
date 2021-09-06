import React, { useState } from "react";
import v from "../images/v.png";
import o1 from "../images/1o.png";
import n from "../images/n.png";
import g from "../images/g.png";
import o2 from "../images/2o.png";
import o3 from "../images/3o.png";
import s from "../images/s.png";
import e from "../images/e.png";
import back from "../images/back.png";
import axios from "axios";
import EmailJSForm from "./EmailJSForm";
import { Link } from "react-router-dom";
import "./styles/form.scss";

export default function Form() {
  return (
    <div>
      <div className="letters-container">
        <Link className="letters-container__link-container" to="/heartbeat">
          <img
            src={v}
            className="letters-container__link-container__letter1"
          ></img>
        </Link>

        <a
          className="letters-container__link-container"
          href="https://www.youtube.com/watch?v=dn1GYQwSBog"
        >
          <img
            src={o1}
            className="letters-container__link-container__letter2"
          ></img>
        </a>

        <a
          className="letters-container__link-container"
          href="http://zoomquilt.org/"
        >
          <img
            src={n}
            className="letters-container__link-container__letter3"
          ></img>
        </a>

        <Link className="letters-container__link-container" to="/tape">
          <img
            src={g}
            className="letters-container__link-container__letter4"
          ></img>
        </Link>

        <a
          className="letters-container__link-container"
          href="https://mandel.gart.nz"
        >
          <img
            src={o2}
            className="letters-container__link-container__letter5"
          ></img>
        </a>

        <a
          className="letters-container__link-container"
          href="https://earth.nullschool.net/"
        >
          <img
            src={o3}
            className="letters-container__link-container__letter6"
          ></img>
        </a>

        <Link className="letters-container__link-container" to="/message">
          <img
            src={s}
            className="letters-container__link-container__letter7"
          ></img>
        </Link>

        <Link className="letters-container__link-container" to="/static">
          <img
            src={e}
            className="letters-container__link-container__letter8"
          ></img>
        </Link>
      </div>
      {/* <div className="form__letters-container">
        <img src={v} className="letters-container__letter_1"></img>
        <img src={o1} className="letters-container__letter_2"></img>
        <img src={n} className="letters-container__letter_3"></img>
        <img src={g} className="letters-container__letter_4"></img>
        <img src={o2} className="letters-container__letter_5"></img>
        <img src={o3} className="letters-container__letter_6"></img>
        <img src={s} className="letters-container__letter_7"></img>
        <img src={e} className="letters-container__letter_8"></img>
      </div> */}
      <div className="contact-container">
        <h3 className="contact-container__h3">Contact</h3>
      </div>
      <EmailJSForm />
      <div className="home-container">
        <Link className="home-container__link" to={"/"}>
          &#60;-------Home
        </Link>
        {/* <Link to="/">
          <img className="home-container__img" src={back}></img>
          <div className="home-container__pseudo"></div>
        </Link> */}
      </div>
    </div>
  );
}
