import React, { useRef, useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";
import { Context } from "../context/Context";
import pixelman from "../video/pixelman_giffy.gif";
// import "./styles/emailJSForm.scss";
import "./styles/emailJSForm.css";

export default function EmailJSForm() {
  const { contactFormColor } = useContext(Context);
  const messageInputRef = useRef();
  const [properties, setProperties] = useState({
    name: { validated: false, contact: "", errorMessage: "", focused: false },
    email: { validated: false, contact: "", errorMessage: "", focused: false },
    message: { validated: false, contact: "", errorMessage: "", focused: false },
  });

  const [submitBtnText, setSubmitBtnText] = useState("Send");
  const [isValid, setIsValid] = useState(false);
  const [notificationSent, setNotificationSent] = useState();
  const [isLoading, setIsLoading] = useState();

  const service = process.env.REACT_APP_SERVICE;
  const template = process.env.REACT_APP_TEMPLATE;
  const user = process.env.REACT_APP_USER;

  const root = document.documentElement;
  root.style.setProperty(
    "--main-color",

    contactFormColor ? "rgb(29, 29, 29)" : "blue"
  );
  root.style.setProperty(
    "--buttonBorder-color",
    contactFormColor ? "rgb(29, 29, 29, 0.315)" : "rgba(0, 0, 255, 0.315)"
  );

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(service, template, e.target, user).then(
      result => {
        console.log(result.text);
        setIsLoading(false);
        setNotificationSent(true);
        setIsValid(false);
        setProperties({
          name: { validated: false, contact: "", errorMessage: "", focused: false },
          email: { validated: false, contact: "", errorMessage: "", focused: false },
          message: { validated: false, contact: "", errorMessage: "", focused: false },
        });
        e.target.reset();
      },
      error => {
        console.log(error.text);
        setIsLoading(false);
        setNotificationSent(false);
      }
    );
  }

  function auto_height(e) {
    const target = e.target;
    messageInputRef.current.style.height = "1vw";
    messageInputRef.current.style.height = `${target.scrollHeight}px`;
  }

  const ValidateForm = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (properties.email.contact) {
      if (validRegex.test(properties.email.contact)) {
        setProperties(p => {
          p.email.validated = true;
          p.email.errorMessage = "";
          return {
            ...p,
          };
        });
      } else {
        setProperties(p => {
          p.email.validated = false;
          p.email.errorMessage = "Please enter a valid email adress";
          return {
            ...p,
          };
        });
      }
    } else {
      if (properties.email.focused) {
        setProperties(p => {
          p.email.validated = false;
          p.email.errorMessage = "Please enter your email";
          return {
            ...p,
          };
        });
      }
    }

    if (properties.name.contact) {
      setProperties(p => {
        p.name.validated = true;
        p.name.errorMessage = "";
        return {
          ...p,
        };
      });
    } else {
      setProperties(p => {
        p.name.validated = false;
        return {
          ...p,
        };
      });

      if (properties.name.focused) {
        setProperties(p => {
          p.name.errorMessage = "Please enter your name";
          return {
            ...p,
          };
        });
      }
    }

    if (properties.message.contact) {
      setProperties(p => {
        p.message.validated = true;
        p.message.errorMessage = "";
        return {
          ...p,
        };
      });
    } else {
      setProperties(p => {
        p.message.validated = false;
        return {
          ...p,
        };
      });

      if (properties.message.focused) {
        setProperties(p => {
          p.message.errorMessage = "Please enter a message";
          return {
            ...p,
          };
        });
      }
    }

    setIsValid(Object.values(properties).every(x => x.validated === true));
  };

  useEffect(() => {
    ValidateForm();

    if (properties.name.focused || properties.email.focused || properties.message.focused) {
      setNotificationSent("");
    }
  }, [
    properties.name.contact,
    properties.name.validated,
    properties.email.contact,
    properties.email.validated,
    properties.message.contact,
    properties.message.validated,
  ]);

  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <section className="form__section">
            <input type="hidden" name="name" />
            <div className="input-container">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                onFocus={() => setProperties(p => ({ ...p, name: { ...p.name, focused: true } }))}
                onBlur={() => setProperties(p => ({ ...p, name: { ...p.name, focused: false } }))}
                onChange={e => setProperties(p => ({ ...p, name: { ...p.name, contact: e.target.value } }))}
              />
              <p className="validation-error">{properties.name.errorMessage}</p>
            </div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                onFocus={() => setProperties(p => ({ ...p, email: { ...p.email, focused: true } }))}
                onBlur={() => setProperties(p => ({ ...p, email: { ...p.email, focused: false } }))}
                onChange={e => setProperties(p => ({ ...p, email: { ...p.email, contact: e.target.value } }))}
              />
              <p className="validation-error">{properties.email.errorMessage}</p>
            </div>
          </section>
          <div>
            <textarea
              className="textarea"
              name="message"
              placeholder="Your Message"
              ref={messageInputRef}
              onFocus={() => setProperties(p => ({ ...p, message: { ...p.message, focused: true } }))}
              onBlur={() => setProperties(p => ({ ...p, message: { ...p.message, focused: false } }))}
              onChange={e => setProperties(p => ({ ...p, message: { ...p.message, contact: e.target.value } }))}
              onInput={auto_height}
            />
            <p className="validation-error__messageInput">{properties.message.errorMessage}</p>
          </div>

          <button
            disabled={!isValid}
            className="submit-button"
            type="submit"
            onMouseDown={() => setSubmitBtnText("")}
            onMouseUp={() => setSubmitBtnText("Send")}
          >
            {submitBtnText}
          </button>

          {isLoading && (
            <div>
              <span className="loading"></span>
            </div>
          )}

          {notificationSent === true && (
            <div className="notificationSent">
              <h4>Email sent!</h4>
              <img className="giffy" src={pixelman} alt=""></img>
              <h4>
                Thank you! <br />A reply will be on the way shortly
              </h4>
            </div>
          )}

          {notificationSent === false && (
            <div className="notificationNotSent">
              <h4>Your email did not get sent!</h4>
              <h5>
                It could be that your email doesnt want to leave you <br />
                because it likes you to much:)
                <br />
                but if you want you can{" "}
                <button className="tryAgainBtn" type="submit" onSubmit={e => handleSubmit(e)}>
                  try again
                </button>
              </h5>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
