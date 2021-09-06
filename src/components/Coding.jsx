import React, { useState } from "react"
import { Link } from "react-router-dom"
import scriptwave_video from "../video/Scriptwave_video.mp4"
import scriptbeat_video from "../video/Scriptbeat_video.mp4"
import styled from "styled-components"
import { VolumeUp, VolumeOff } from "@styled-icons/zondicons"
import pixelman from "../video/pixelman_giffy.gif"
import "./styles/coding.scss"

const VolOnIcon = styled(VolumeUp)`
  color: white;
  width: 20px;
  height: auto;
  cursor: pointer;
  margin-bottom: -20px;
  margin-top: 10px;
  :hover {
    color: rgb(104, 104, 104);
  }
`

const VolOffIcon = styled(VolumeOff)`
  color: white;
  width: 20px;
  height: auto;
  cursor: pointer;
  margin-bottom: -20px;
  margin-top: 10px;
  :hover {
    color: rgb(104, 104, 104);
  }
`

export default function Coding() {
  const [scriptwave, setScriptwave] = useState(false)
  const [joyride, setJoyride] = useState(false)
  const [scriptbeat, setScriptbeat] = useState(false)
  const [addProject, setAddProject] = useState(false)
  const [muted, setMuted] = useState(true)

  return (
    <>
      <header className="header-coding">
        <div>
          <Link className="header-coding__homelink" to={"/"}>
            &#60;------
          </Link>
        </div>
        <div className="header-coding__container">
          <div className="header-coding__container__C">/C/</div>
          <div className="header-coding__container__O">/O/</div>
          <div className="header-coding__container__D">/D/</div>
          <div className="header-coding__container__I">/I/</div>
          <div className="header-coding__container__N">/N/</div>
          <div className="header-coding__container__G">/G/</div>
        </div>
        <div></div>
      </header>
      <main className="main-coding">
        <div className="main-coding__links">
          <div
            className="main-coding__links__link-container"
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
              <VolOnIcon onClick={() => setMuted(muted ? false : true)} />
            ) : (
              <VolOffIcon onClick={() => setMuted(muted ? false : true)} />
            )}
          </div>
          <div
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
              <VolOnIcon onClick={() => setMuted(muted ? false : true)} />
            ) : (
              <VolOffIcon onClick={() => setMuted(muted ? false : true)} />
            )}
          </div>
          <div
            onMouseEnter={() => setAddProject(true)}
            onMouseLeave={() => setAddProject(false)}
            className="main-coding__links__link-container"
          >
            <Link
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
              IS A WEBSITE MADE FOR PODCAST JOYRIDE
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
  )
}
