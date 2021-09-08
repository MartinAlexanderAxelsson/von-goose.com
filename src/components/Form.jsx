import React, { useContext } from "react";
import EmailJSForm from "./EmailJSForm";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
// import "./styles/form.scss"
import "./styles/form.css";
import LettersBlue from "./LettersBlue";
import LettersGrey from "./LettersGrey";

export default function Form() {
  const { contactFormColor } = useContext(Context);
  const root = document.documentElement;
  root.style.setProperty(
    "--main-color",
    contactFormColor ? "rgb(29, 29, 29)" : "blue"
  );
  return (
    <div>
      {contactFormColor ? <LettersGrey /> : <LettersBlue />}
      <div className="contact-container">
        <h3 className="contact-container__h3">Contact</h3>
      </div>
      <EmailJSForm />
      <div className="home-container">
        {contactFormColor ? (
          <Link className="home-container__link" to={"/coding"}>
            &#60;-------back
          </Link>
        ) : (
          <Link className="home-container__link" to={"/"}>
            &#60;-------Home
          </Link>
        )}
      </div>
    </div>
  );
}
