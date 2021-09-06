import React from "react";
import heart from "../images/heartbeat.gif";
import "./styles/heartbeat.scss";

export default function Heartbeat() {
  return (
    <div>
      <div className="heartbeat">
        <img className="heartbeat__img" src={heart}></img>
        <img className="heartbeat__img2" src={heart}></img>
      </div>
    </div>
  );
}
