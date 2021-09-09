import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import scriptwave_video from "../video/Scriptwave_video.mp4";
import scriptbeat_video from "../video/Scriptbeat_video.mp4";
import styled from "styled-components";
import { VolumeUp, VolumeOff } from "@styled-icons/zondicons";
import pixelman from "../video/pixelman_giffy.gif";
import { Context } from "../context/Context";
import "./styles/codingMobile.scss";

const VolOnIcon = styled(VolumeUp)`
  color: white;
  width: 20px;
  height: auto;
  cursor: pointer;
  margin-bottom: -20px;
  margin-top: 10px;
  transition: 0.2s;
  :hover {
    color: rgb(104, 104, 104);
  }
`;

const VolOffIcon = styled(VolumeOff)`
  color: white;
  width: 20px;
  height: auto;
  cursor: pointer;
  margin-bottom: -20px;
  margin-top: 10px;
  transition: 0.2s;
  :hover {
    color: rgb(104, 104, 104);
  }
`;

export default function CodingMobile() {
  const { setContactFormColor } = useContext(Context);
  const [scriptwave, setScriptwave] = useState(false);
  const [joyride, setJoyride] = useState(false);
  const [scriptbeat, setScriptbeat] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [muted, setMuted] = useState(true);

  const displaySoundIcon = {
    visibility: "unset",
  };

  const hideSoundIcon = {
    visibility: "hidden",
  };
  const style = {
    background: "rgb(29, 29, 29)",
    color: "white",
  };

  const [joyrideStyle, setJoyrideStyle] = useState(style);
  const [scriptwaveStyle, setScriptwaveStyle] = useState(style);
  const [scriptbeatStyle, setScriptbeatStyle] = useState(style);
  const [addprojectStyle, setAddprojectStyle] = useState(style);

  const scriptwaveClick = () => {
    setScriptwave(!scriptwave);
    setScriptbeat(false);
    setJoyride(false);
    setAddProject(false);
  };
  const joyrideClick = () => {
    setScriptwave(false);
    setScriptbeat(false);
    setJoyride(!joyride);
    setAddProject(false);
  };
  const scriptbeatClick = () => {
    setScriptwave(false);
    setScriptbeat(!scriptbeat);
    setJoyride(false);
    setAddProject(false);
  };
  const addprojectClick = () => {
    setScriptwave(false);
    setScriptbeat(false);
    setJoyride(false);
    setAddProject(!addProject);
  };

  return (
    <>
      <main className="main-coding-mobile">
        <div className="main-coding-mobile__links">
          <div
            style={scriptwave ? scriptwaveStyle : null}
            className="main-coding-mobile__links__link-container"
            onClick={() => scriptwaveClick()}
          >
            <a
              style={scriptwave ? scriptwaveStyle : null}
              className="main-coding-mobile__links__link-container__a"
              href="https://von-goose.com/scriptwave"
            >
              SCRIPTWAVE
            </a>

            {muted === false ? (
              <VolOnIcon
                style={scriptwave ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            ) : (
              <VolOffIcon
                style={scriptwave ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            )}
          </div>

          {scriptwave === true ? (
            <div className="main-coding-mobile__display-container__scriptwave">
              <div className="main-coding-mobile__display-container__scriptwave__p-container">
                <p className="main-coding-mobile__display-container__scriptwave__p-container__p1">
                  IS A MIDI COMPATIBLE SYNTH MADE WITH REACT AND THE WEB AUDIO
                  API
                </p>
                <p className="main-coding-mobile__display-container__scriptwave__p-container__p2">
                  IT IS PLAYABLE VIA YOUR COMPUTER KEYBOARD OR A MIDI DEVICE
                  CONNECTED THROUGH YOUR USB PORT
                </p>
                <p className="main-coding-mobile__display-container__scriptwave__p-container__p3">
                  MOBILE VIEW IS CURRENTLY IN DEVELOPMENT<span></span>
                </p>
              </div>
              <div className="main-coding-mobile__display-container__scriptwave__video-container">
                <video
                  className="main-coding-mobile__display-container__scriptwave__video-container__video"
                  autoPlay
                  muted={muted}
                  loop
                >
                  <source src={scriptwave_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div
            style={joyride ? joyrideStyle : null}
            className="main-coding-mobile__links__link-container"
            onClick={() => joyrideClick()}
            onMouseLeave={() => setJoyride(false)}
          >
            <a
              style={joyride ? joyrideStyle : null}
              className="main-coding-mobile__links__link-container__a"
              href="https://joyride.digital"
            >
              JOYRIDE.DIGITAL
            </a>
          </div>

          {joyride === true ? (
            <div className="main-coding-mobile__display-container__joyride">
              <p className="main-coding-mobile__display-container__joyride__p">
                IS A WEBSITE MADE FOR PODCAST JOYRIDE, MORE INFO COMING SOON
              </p>
            </div>
          ) : (
            <div></div>
          )}
          <div
            style={scriptbeat ? scriptbeatStyle : null}
            className="main-coding-mobile__links__link-container"
            onClick={() => scriptbeatClick()}
            onMouseLeave={() => setScriptbeat(false)}
          >
            <a
              style={scriptbeat ? scriptbeatStyle : null}
              className="main-coding-mobile__links__link-container__a"
              href="https://von-goose.com/scriptbeat"
            >
              SCRIPTBEAT
            </a>

            {muted === false ? (
              <VolOnIcon
                style={scriptbeat ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            ) : (
              <VolOffIcon
                style={scriptbeat ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            )}
          </div>
          <div>
            {scriptbeat === true ? (
              <div className="main-coding-mobile__display-container__scriptbeat">
                <p className="main-coding-mobile__display-container__scriptbeat__p">
                  IS AN INTERACTIVE BROWSERBASED DRUMMACHINE AND SEQUENCER,
                  BUILT WITH JAVASCRIPT AND THE WEB AUDIO API
                </p>

                <div className="main-coding-mobile__display-container__scriptbeat__video-container">
                  <video
                    className="main-coding-mobile__display-container__scriptbeat__video-container__video"
                    autoPlay
                    muted={muted}
                    loop
                  >
                    <source src={scriptbeat_video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div
            style={addProject ? addprojectStyle : null}
            onClick={() => addprojectClick()}
            onMouseLeave={() => setAddProject(false)}
            className="main-coding-mobile__links__link-container"
          >
            <Link
              style={addProject ? addprojectStyle : null}
              onClick={setContactFormColor(true)}
              className="main-coding-mobile__links__link-container__a"
              to={"/form"}
            >
              ADD PROJECT +
            </Link>
          </div>
          <div>
            {addProject === true ? (
              <div className="main-coding-mobile__display-container__addproject">
                <img
                  className="main-coding-mobile__display-container__addproject__giffy"
                  src={pixelman}
                  alt=""
                ></img>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="main-coding-mobile__display-container"></div>
      </main>
    </>
  );
}
