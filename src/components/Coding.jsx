import React, { useState, useRef, createRef, useEffect, useContext } from "react";
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
  const style = {
    scriptwave: { background: "", transition: "" },
    joyride: { background: "", transition: "" },
    scriptbeat: { background: "", transition: "" },
    addProject: { background: "", transition: "" },
  };
  const sections = ["scriptwave", "joyride", "scriptbeat", "addProject"];
  const [section, setSection] = useState();
  const [sectionStyle, setSectionStyle] = useState(style);
  const { setContactFormColor } = useContext(Context);
  const [muted, setMuted] = useState(true);

  const displaySoundIcon = {
    visibility: "unset",
  };

  const hideSoundIcon = {
    visibility: "hidden",
  };

  const handleOnMouseEnter = section => {
    setSection(section);
    const nonActiveSection = sections.filter(e => e !== section);

    setSectionStyle(p => ({
      ...p,
      [section]: { ...p.background, background: "rgb(29, 29, 29)", transition: "0.5s" },
      [nonActiveSection[0]]: { ...p.background, background: "rgb(29, 29, 29, 0.200)", transition: "0.5s" },
      [nonActiveSection[1]]: { ...p.background, background: "rgb(29, 29, 29, 0.100)", transition: "0.5s" },
      [nonActiveSection[2]]: { ...p.background, background: "rgb(29, 29, 29, 0.000)", transition: "0.5s" },
    }));
  };
  const handleOnMouseLeave = () => {
    setSection(null);
    setSectionStyle(style);
  };

  useEffect(() => {}, [section]);

  return (
    <>
      <main className="main-coding">
        <div className="main-coding__links">
          <div
            style={sectionStyle.scriptwave}
            className="main-coding__links__link-container"
            // onTouchStart={() => setSection("scriptwave")}
            // onTouchEnd={() => setSection(null)}
            onMouseEnter={() => handleOnMouseEnter("scriptwave")}
            onMouseLeave={() => handleOnMouseLeave()}
          >
            <a className="main-coding__links__link-container__a" href="https://scriptwave.von-goose.com">
              SCRIPTWAVE
            </a>

            {muted === false ? (
              <VolOnIcon
                style={section === "scriptwave" ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            ) : (
              <VolOffIcon
                style={section === "scriptwave" ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            )}
          </div>
          <div
            style={sectionStyle.joyride}
            onMouseEnter={() => handleOnMouseEnter("joyride")}
            onMouseLeave={() => handleOnMouseLeave()}
            className="main-coding__links__link-container"
          >
            <a className="main-coding__links__link-container__a" href="https://joyride.digital">
              JOYRIDE.DIGITAL
            </a>
          </div>
          <div
            style={sectionStyle.scriptbeat}
            onMouseEnter={() => handleOnMouseEnter("scriptbeat")}
            onMouseLeave={() => handleOnMouseLeave()}
            className="main-coding__links__link-container"
          >
            <a className="main-coding__links__link-container__a" href="https://scriptbeat.von-goose.com">
              SCRIPTBEAT
            </a>

            {muted === false ? (
              <VolOnIcon
                style={section === "scriptbeat" ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            ) : (
              <VolOffIcon
                style={section === "scriptbeat" ? displaySoundIcon : hideSoundIcon}
                onClick={() => setMuted(muted ? false : true)}
              />
            )}
          </div>
          <div
            style={sectionStyle.addProject}
            onMouseEnter={() => handleOnMouseEnter("addProject")}
            onMouseLeave={() => handleOnMouseLeave()}
            className="main-coding__links__link-container"
          >
            <Link onClick={setContactFormColor(true)} className="main-coding__links__link-container__a" to={"/contact"}>
              ADD PROJECT +
            </Link>
          </div>
        </div>

        <div className="main-coding__display-container">
          {section === "scriptwave" ? (
            <div className="main-coding__display-container__scriptwave">
              <div className="main-coding__display-container__scriptwave__p-container">
                <p className="main-coding__display-container__scriptwave__p-container__p1">
                  IS A MIDI COMPATIBLE SYNTH MADE WITH REACT AND THE WEB AUDIO API
                </p>
                <p className="main-coding__display-container__scriptwave__p-container__p2">
                  IT IS PLAYABLE VIA YOUR COMPUTER KEYBOARD OR A MIDI DEVICE CONNECTED THROUGH YOUR USB PORT
                </p>
                <p className="main-coding__display-container__scriptwave__p-container__p3">
                  MOBILE VIEW IS CURRENTLY IN DEVELOPMENT<span className="dots"></span>
                </p>
              </div>
              <div className="main-coding__display-container__scriptwave__video-container">
                {scriptwave_video ? (
                  <video
                    className="main-coding__display-container__scriptwave__video-container__video"
                    autoPlay
                    muted={muted}
                    loop
                    src={scriptwave_video}
                    type="video/mp4"
                  ></video>
                ) : (
                  <div className="main-coding__display-container__scriptwave__video-container__videoLoading">
                    <p>Video loading</p>
                    <span className="videoLoading-animation"></span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {section === "joyride" ? (
            <div className="main-coding__display-container__joyride">
              <p className="main-coding__display-container__joyride__p">
                IS A WEBSITE MADE FOR PODCAST JOYRIDE, MORE INFO COMING SOON
              </p>
            </div>
          ) : (
            <div></div>
          )}
          {section === "scriptbeat" ? (
            <div className="main-coding__display-container__scriptbeat">
              <p className="main-coding__display-container__scriptbeat__p">
                IS AN INTERACTIVE BROWSERBASED DRUMMACHINE AND SEQUENCER, BUILT WITH JAVASCRIPT AND THE WEB AUDIO API
              </p>

              <div className="main-coding__display-container__scriptbeat__video-container">
                {scriptbeat_video ? (
                  <video
                    className="main-coding__display-container__scriptbeat__video-container__video"
                    autoPlay
                    muted={muted}
                    loop
                  >
                    <source src={scriptbeat_video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="main-coding__display-container__scriptwave__video-container__videoLoading">
                    <p>Video loading</p>
                    <span className="videoLoading-animation"></span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {section === "addProject" ? (
            <div className="main-coding__display-container__addproject">
              <img className="main-coding__display-container__addproject__giffy" src={pixelman} alt=""></img>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </>
  );
}
