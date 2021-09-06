import React, { useEffect, useRef } from "react";
import tv from "../images/tvGif.gif";
import tvStatic from "../sounds/static.mp3";
import "./styles/static.scss";

export default function Static() {
  const staticAudio = useRef();

  useEffect(() => {
    staticAudio.current.volume = 0.8;

    staticAudio.current.play();
  }, []);
  return (
    <div>
      <div className="static">
        <audio ref={staticAudio} src={tvStatic} loop="loop"></audio>
        <img src={tv} className="static__img"></img>
      </div>
    </div>
  );
}
