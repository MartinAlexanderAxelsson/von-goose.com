import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import line from "../images/line.jpg";
import spotify from "../images/Spotify_Icon_RGB_Green.png";
import sc from "../images/SoundCloud.png";
import yt from "../images/YT_logo.png";
import github from "../images/git.png";
import linkedin from "../images/linked.png";
import mail from "../images/mail.png";
import tape from "../images/tape-icon.png";
import v from "../images/v.png";
import o1 from "../images/1o.png";
import n from "../images/n.png";
import g from "../images/g.png";
import o2 from "../images/2o.png";
import o3 from "../images/3o.png";
import s from "../images/s.png";
import e from "../images/e.png";
import coding_animation from "../video/Coding_animation.mp4";
import { Context } from "../context/Context";
import "./styles/main.scss";

export default function Main() {
  const { setContactFormColor } = useContext(Context);
  const [about, setAbout] = useState(false);
  const [coding, setCoding] = useState(false);
  const [music, setMusic] = useState(false);

  const [disableAnimations, setDisableAnimations] = useState("");

  const pageVisited = () => {
    if (!sessionStorage.getItem("hasVisited")) {
      setTimeout(function () {
        sessionStorage.setItem("hasVisited", true);
      }, 3000);
    }

    if (sessionStorage.getItem("hasVisited")) {
      setDisableAnimations("none");
    }
  };

  useEffect(() => {
    pageVisited();
  }, []);

  return (
    <div>
      <div className="letters-container">
        <Link className="letters-container__link-container" to="/heartbeat">
          <img src={v} className="letters-container__link-container__letter1" alt=""></img>
        </Link>

        <a className="letters-container__link-container" href="https://www.youtube.com/watch?v=dn1GYQwSBog">
          <img src={o1} className="letters-container__link-container__letter2" alt=""></img>
        </a>

        <a className="letters-container__link-container" href="http://zoomquilt.org/">
          <img src={n} className="letters-container__link-container__letter3" alt=""></img>
        </a>

        <Link className="letters-container__link-container" to="/tape">
          <img src={g} className="letters-container__link-container__letter4" alt=""></img>
        </Link>

        <a className="letters-container__link-container" href="https://mandel.gart.nz">
          <img src={o2} className="letters-container__link-container__letter5" alt=""></img>
        </a>

        <a className="letters-container__link-container" href="https://earth.nullschool.net/">
          <img src={o3} className="letters-container__link-container__letter6" alt=""></img>
        </a>

        <Link className="letters-container__link-container" to="/message">
          <img src={s} className="letters-container__link-container__letter7" alt=""></img>
        </Link>

        <Link className="letters-container__link-container" to="/static">
          <img src={e} className="letters-container__link-container__letter8" alt=""></img>
        </Link>
      </div>

      <div className="all-lines-container">
        <div className="all-lines-container__line1-container" style={{ animation: disableAnimations }}>
          <img className="all-lines-container__line1-container__line" src={line} alt=""></img>
        </div>
        <div className="all-lines-container__line2-container" style={{ animation: disableAnimations }}>
          <img className="all-lines-container__line2-container__line" src={line} alt=""></img>
        </div>
        <div className="all-lines-container__line3-container" style={{ animation: disableAnimations }}>
          <img className="all-lines-container__line3-container__line" src={line} alt=""></img>
        </div>
      </div>

      <div className="menus-container">
        <div className="menus-container__wrapper">
          <div
            style={{ animation: disableAnimations }}
            onMouseOver={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
            className={about ? "menus-container__wrapper__menu-1__hover" : "menus-container__wrapper__menu-1"}
          >
            About
          </div>
        </div>

        <div className="menus-container__wrapper">
          <Link
            to={"/coding"}
            style={{ animation: disableAnimations }}
            onMouseOver={() => setCoding(true)}
            onMouseLeave={() => setCoding(false)}
            className={coding ? "menus-container__wrapper__menu-2__hover" : "menus-container__wrapper__menu-2"}
          >
            Coding
          </Link>
        </div>
        <div className="menus-container__wrapper">
          <div
            style={{ animation: disableAnimations }}
            onMouseOver={() => setMusic(true)}
            onMouseLeave={() => setMusic(false)}
            className={music ? "menus-container__wrapper__menu-3__hover" : "menus-container__wrapper__menu-3"}
          >
            Music
          </div>
        </div>
      </div>

      <div className="links-container">
        <div
          onMouseOver={() => setAbout(true)}
          onMouseLeave={() => setAbout(false)}
          className={about ? "links-container__link-1__displayed" : "links-container__link-1"}
        >
          <a href="https://github.com/MartinAlexanderAxelsson">
            <img className="links-container__link-1__img1" src={github} alt="github logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/martin-axelsson/">
            <img className="links-container__link-1__img2" src={linkedin} alt="linkedin logo"></img>
          </a>
          <Link to="/form" onClick={setContactFormColor(false)}>
            <img className="links-container__link-1__img3" src={mail} alt=""></img>
          </Link>
        </div>
        <Link
          to={"/coding"}
          onMouseOver={() => setCoding(true)}
          onMouseLeave={() => setCoding(false)}
          className={coding ? "links-container__link-2__displayed" : "links-container__link-2"}
        >
          <div className="links-container__link-2__animation">
            <video className="links-container__link-2__animation__video" autoPlay muted loop>
              <source src={coding_animation} type="video/mp4" />
            </video>
          </div>
        </Link>
        <div
          onMouseOver={() => setMusic(true)}
          onMouseLeave={() => setMusic(false)}
          className={music ? "links-container__link-3__displayed" : "links-container__link-3"}
        >
          <a href="https://open.spotify.com/artist/7JpC0dmw0M65MmhL4PYEhh">
            <img className="links-container__link-3__img1" src={spotify} alt="spotify logo"></img>
          </a>
          {/* <a href="https://soundcloud.com/von_goose"> */}
          <a href="https://vongoose.lol">
            <img className="links-container__link-3__img2" src={tape} alt="soundcloud logo"></img>
          </a>
          <a href="https://www.youtube.com/channel/UCXxwh2DZVGyaw0OgdryEFwg?view_as=subscriber">
            <img className="links-container__link-3__img3" src={yt} alt="youtube logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
