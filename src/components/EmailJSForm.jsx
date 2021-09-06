import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./styles/emailJSForm.scss";

export default function EmailJSForm() {
  const ref = useRef();

  const [input, setInput] = useState();
  const [text, setText] = useState("Submit");

  const service = process.env.REACT_APP_SERVICE;
  const template = process.env.REACT_APP_TEMPLATE;
  const user = process.env.REACT_APP_USER;

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(service, template, e.target, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  function auto_height(e) {
    const target = e.target;
    ref.current.style.height = "1vw";
    ref.current.style.height = `${target.scrollHeight}px`;
  }

  return (
    <div>
      <div className="emailJS__form-container">
        <form className="emailJS__form-container__form" onSubmit={handleSubmit}>
          <section className="emailJS__form-container__form__section">
            <input type="hidden" name="name" />

            <input
              className="emailJS__form-container__form__section__input"
              type="text"
              name="name"
              placeholder="Your Name"
            />

            <input
              className="emailJS__form-container__form__section__input"
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => setInput(e.target.value)}
            />
          </section>

          <textarea
            className="emailJS__form-container__form__textarea"
            name="message"
            placeholder="Your Message"
            ref={ref}
            onInput={auto_height}
          />
          {/* <input className="form-container__form-btn" type="submit" value="Submit" /> */}
          <button
            disabled={input === undefined || input === ""}
            className="emailJS__form-container__form__button"
            type="submit"
            onMouseDown={(e) => setText("")}
            onMouseUp={(e) => setText("Submit")}
          >
            {text}
          </button>
        </form>
      </div>
    </div>
  );
}
