import React, { useRef, useEffect } from "react";
import video from "../images/giffy.mp4";
import "./styles/morse.scss";

export default function Morse() {
  const morseAudio = useRef();

  useEffect(() => {
    morseAudio.current.volume = 0.05;
    morseAudio.current.play();
  }, []);

  return (
    <div>
      <div className="morse">
        <video
          ref={morseAudio}
          className="morse__video"
          src={video}
          loop="loop"
        ></video>
      </div>
    </div>
  );
}
