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
  width: 30px;
  height: auto;
  cursor: pointer;
  margin-left: 30px;
  transition: 0.2s;
  :hover {
    color: rgb(104, 104, 104);
  }
`;

const VolOffIcon = styled(VolumeOff)`
  color: white;
  width: 30px;
  height: auto;
  cursor: pointer;
  margin-left: 30px;
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
  const [isLoading, setIsLoading] = useState({ scriptbeat: true, scriptwave: true });

  const displaySoundIcon = {
    display: "unset",
  };

  const hideSoundIcon = {
    display: "none",
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
      <main className="coding-mobile">
        <div className="coding-mobile__sections">
          <div style={scriptwave ? scriptwaveStyle : null} className="coding-mobile__sections__section-container">
            <p onClick={() => scriptwaveClick()} style={scriptwave ? scriptwaveStyle : null} className="coding-mobile__sections__section-container__text">
              SCRIPTWAVE
            </p>

            {muted === false ? <VolOnIcon style={scriptwave ? displaySoundIcon : hideSoundIcon} onClick={() => setMuted(muted ? false : true)} /> : <VolOffIcon style={scriptwave ? displaySoundIcon : hideSoundIcon} onClick={() => setMuted(muted ? false : true)} />}
          </div>

          {scriptwave === true ? (
            <div className="coding-mobile__display__scriptwave">
              <div className="coding-mobile__display__scriptwave__text">
                <p className="coding-mobile__display__scriptwave__text__p1">IS A MIDI COMPATIBLE SYNTH MADE WITH REACT AND THE WEB AUDIO API</p>
                <p className="coding-mobile__display__scriptwave__text__p2">IT IS PLAYABLE VIA YOUR COMPUTER KEYBOARD OR A MIDI DEVICE CONNECTED THROUGH YOUR USB PORT</p>
                <p className="coding-mobile__display__scriptwave__text__p3">
                  MOBILE VIEW IS CURRENTLY IN DEVELOPMENT<span className="dots"></span>
                </p>
              </div>
              <div className="coding-mobile__display__scriptwave__video-container">
                <video style={{ display: isLoading.scriptwave ? "none" : "unset" }} className="coding-mobile__display__scriptwave__video-container__video" autoPlay muted={muted} loop onLoadedData={() => setIsLoading({ ...isLoading, scriptwave: false })} src={scriptwave_video} type="video/mp4" />

                {isLoading.scriptwave && (
                  <div className="coding-mobile__display__scriptwave__video-container__videoLoading">
                    <p>Video loading</p>
                    <span className="videoLoading-animation"></span>
                  </div>
                )}
              </div>
              <div className="coding-mobile__display__scriptwave__link-container">
                <a href="https://scriptwave.von-goose.com" className="coding-mobile__display__link-container__link">
                  SCRIPTWAVE----&#62;
                </a>
              </div>
              <div onClick={() => scriptwaveClick()} className="coding-mobile__display__arrow">
                ^
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div style={joyride ? joyrideStyle : null} className="coding-mobile__sections__section-container">
            <p onClick={() => joyrideClick()} style={joyride ? joyrideStyle : null} className="coding-mobile__sections__section-container__text">
              JOYRIDE.DIGITAL
            </p>
          </div>

          {joyride === true ? (
            <div className="coding-mobile__display__joyride">
              <p className="coding-mobile__display__joyride__p">IS A WEBSITE MADE FOR PODCAST JOYRIDE, MORE INFO COMING SOON</p>
              <div className="coding-mobile__display__link-container">
                <a href="https://joyride.digital" className="coding-mobile__display__link-container__link">
                  JOYRIDE----&#62;
                </a>
              </div>
              <div onClick={() => joyrideClick()} className="coding-mobile__display__arrow">
                ^
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div style={scriptbeat ? scriptbeatStyle : null} className="coding-mobile__sections__section-container">
            <p onClick={() => scriptbeatClick()} style={scriptbeat ? scriptbeatStyle : null} className="coding-mobile__sections__section-container__text">
              SCRIPTBEAT
            </p>

            {muted === false ? <VolOnIcon style={scriptbeat ? displaySoundIcon : hideSoundIcon} onClick={() => setMuted(muted ? false : true)} /> : <VolOffIcon style={scriptbeat ? displaySoundIcon : hideSoundIcon} onClick={() => setMuted(muted ? false : true)} />}
          </div>
          <div>
            {scriptbeat === true ? (
              <div className="coding-mobile__display__scriptbeat">
                <p className="coding-mobile__display__scriptbeat__p">IS AN INTERACTIVE BROWSERBASED DRUMMACHINE AND SEQUENCER, BUILT WITH JAVASCRIPT AND THE WEB AUDIO API</p>

                <div className="coding-mobile__display__scriptbeat__video-container">
                  <video style={{ display: isLoading.scriptbeat ? "none" : "unset" }} className="coding-mobile__display__scriptbeat__video-container__video" autoPlay muted={muted} loop onLoadedData={() => setIsLoading({ ...isLoading, scriptbeat: false })} src={scriptbeat_video} type="video/mp4" />

                  {isLoading.scriptbeat && (
                    <div className="coding-mobile__display__scriptwave__video-container__videoLoading">
                      <p>Video loading</p>
                      <span className="videoLoading-animation"></span>
                    </div>
                  )}
                </div>
                <div className="coding-mobile__display__link-container">
                  <a href="https://joyride.digital" className="coding-mobile__display__link-container__link">
                    SCRIPTBEAT----&#62;
                  </a>
                </div>
                <div onClick={() => scriptbeatClick()} className="coding-mobile__display__arrow">
                  ^
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div style={addProject ? addprojectStyle : null} className="coding-mobile__sections__section-container">
            <p style={addProject ? addprojectStyle : null} onClick={() => addprojectClick()} className="coding-mobile__sections__section-container__text">
              ADD PROJECT +
            </p>
          </div>
          <div>
            {addProject === true ? (
              <div className="coding-mobile__display__addproject">
                <img className="coding-mobile__display__addproject__giffy" src={pixelman} alt=""></img>
                <div className="coding-mobile__display__link-container">
                  <Link onClick={setContactFormColor(true)} className="coding-mobile__display__link-container__link" to={"/contact"}>
                    CONTACT ME----&#62;
                  </Link>
                </div>
                <div onClick={() => addprojectClick()} className="coding-mobile__display__arrow">
                  ^
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="coding-mobile__display"></div>
      </main>
    </>
  );
}
