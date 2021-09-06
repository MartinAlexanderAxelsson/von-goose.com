import React, { useRef, useEffect } from "react";
import tape from "../images/tapedeck.gif";
import yellowstone from "../sounds/Yellowstone.mp3";
import radio from "../sounds/transmission.mp3";
import "./styles/tape.scss";

export default function Tape() {
  const yellowstoneAudio = useRef();
  const radioAudio = useRef();

  useEffect(() => {
    yellowstoneAudio.current.volume = 0.8;
    radioAudio.current.volume = 0.3;

    yellowstoneAudio.current.play();
    radioAudio.current.play();
  }, []);

  return (
    <div>
      <div className="tape">
        <audio ref={yellowstoneAudio} src={yellowstone} loop="loop"></audio>
        <audio ref={radioAudio} src={radio} loop="loop"></audio>
        <img src={tape} className="tape__img"></img>
      </div>
    </div>
  );
}
