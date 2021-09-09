import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import scriptwave_video from "../video/Scriptwave_video.mp4";
import scriptbeat_video from "../video/Scriptbeat_video.mp4";
import styled from "styled-components";
import { VolumeUp, VolumeOff } from "@styled-icons/zondicons";
import pixelman from "../video/pixelman_giffy.gif";
import { Context } from "../context/Context";
import "./styles/coding.scss";

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

export default function Coding() {
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

  const [joyrideStyle, setJoyrideStyle] = useState();
  const [scriptwaveStyle, setScriptwaveStyle] = useState();
  const [scriptbeatStyle, setScriptbeatStyle] = useState();
  const [addprojectStyle, setAddprojectStyle] = useState();

  const handleStyleChange = () => {
    if (scriptwave || addProject || scriptbeat || joyride) {
      if (scriptwave) {
        setScriptwaveStyle({
          background: "rgb(29, 29, 29)",
          transition: "0.5s",
        });
        setJoyrideStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
        setScriptbeatStyle({
          background: "rgba(29, 29, 29, 0.100)",
          transition: "0.5s",
        });
        setAddprojectStyle({
          background: "rgba(29, 29, 29, 0.000)",
          transition: "0.5s",
        });
      }

      if (joyride) {
        setJoyrideStyle({
          background: "rgb(29, 29, 29)",
          transition: "0.5s",
        });
        setScriptwaveStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
        setScriptbeatStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
        setAddprojectStyle({
          background: "rgba(29, 29, 29, 0.100)",
          transition: "0.5s",
        });
      }

      if (scriptbeat) {
        setScriptbeatStyle({
          background: "rgb(29, 29, 29)",
          transition: "0.5s",
        });
        setJoyrideStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
        setScriptwaveStyle({
          background: "rgba(29, 29, 29, 0.100)",
          transition: "0.5s",
        });
        setAddprojectStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
      }

      if (addProject) {
        setAddprojectStyle({
          background: "rgb(29, 29, 29)",
          transition: "0.5s",
        });
        setJoyrideStyle({
          background: "rgba(29, 29, 29, 0.100)",
          transition: "0.5s",
        });
        setScriptbeatStyle({
          background: "rgba(29, 29, 29, 0.200)",
          transition: "0.5s",
        });
        setScriptwaveStyle({
          background: "rgba(29, 29, 29, 0.000)",
          transition: "0.5s",
        });
      }
    } else {
      setScriptwaveStyle(null);
      setJoyrideStyle(null);
      setScriptbeatStyle(null);
      setAddprojectStyle(null);
    }
  };

  useEffect(() => {
    handleStyleChange();
  }, [scriptwave, joyride, addProject, scriptbeat]);

  return (
    <>
      <main className="main-coding">
        <div className="main-coding__links">
          <div
            style={scriptwaveStyle}
            className="main-coding__links__link-container"
            onTouchStart={() => setScriptwave(true)}
            onTouchEnd={() => setScriptwave(false)}
            onMouseEnter={() => setScriptwave(true)}
            onMouseLeave={() => setScriptwave(false)}
          >
            <a
              className="main-coding__links__link-container__a"
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
          <div
            style={joyrideStyle}
            className="main-coding__links__link-container"
            onMouseEnter={() => setJoyride(true)}
            onMouseLeave={() => setJoyride(false)}
          >
            <a
              className="main-coding__links__link-container__a"
              href="https://joyride.digital"
            >
              JOYRIDE.DIGITAL
            </a>
          </div>
          <div
            style={scriptbeatStyle}
            className="main-coding__links__link-container"
            onMouseEnter={() => setScriptbeat(true)}
            onMouseLeave={() => setScriptbeat(false)}
          >
            <a
              className="main-coding__links__link-container__a"
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
          <div
            style={addprojectStyle}
            onMouseEnter={() => setAddProject(true)}
            onMouseLeave={() => setAddProject(false)}
            className="main-coding__links__link-container"
          >
            <Link
              onClick={setContactFormColor(true)}
              className="main-coding__links__link-container__a"
              to={"/form"}
            >
              ADD PROJECT +
            </Link>
          </div>
        </div>

        <div className="main-coding__display-container">
          {scriptwave === true ? (
            <div className="main-coding__display-container__scriptwave">
              <div className="main-coding__display-container__scriptwave__p-container">
                <p className="main-coding__display-container__scriptwave__p-container__p1">
                  IS A MIDI COMPATIBLE SYNTH MADE WITH REACT AND THE WEB AUDIO
                  API
                </p>
                <p className="main-coding__display-container__scriptwave__p-container__p2">
                  IT IS PLAYABLE VIA YOUR COMPUTER KEYBOARD OR A MIDI DEVICE
                  CONNECTED THROUGH YOUR USB PORT
                </p>
                <p className="main-coding__display-container__scriptwave__p-container__p3">
                  MOBILE VIEW IS CURRENTLY IN DEVELOPMENT<span></span>
                </p>
              </div>
              <div className="main-coding__display-container__scriptwave__video-container">
                <video
                  className="main-coding__display-container__scriptwave__video-container__video"
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
          {joyride === true ? (
            <div className="main-coding__display-container__joyride">
              <p className="main-coding__display-container__joyride__p">
                IS A WEBSITE MADE FOR PODCAST JOYRIDE, MORE INFO COMING SOON
              </p>
            </div>
          ) : (
            <div></div>
          )}
          {scriptbeat === true ? (
            <div className="main-coding__display-container__scriptbeat">
              <p className="main-coding__display-container__scriptbeat__p">
                IS AN INTERACTIVE BROWSERBASED DRUMMACHINE AND SEQUENCER, BUILT
                WITH JAVASCRIPT AND THE WEB AUDIO API
              </p>

              <div className="main-coding__display-container__scriptbeat__video-container">
                <video
                  className="main-coding__display-container__scriptbeat__video-container__video"
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
          {addProject === true ? (
            <div className="main-coding__display-container__addproject">
              <img
                className="main-coding__display-container__addproject__giffy"
                src={pixelman}
                alt=""
              ></img>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </>
  );
}
