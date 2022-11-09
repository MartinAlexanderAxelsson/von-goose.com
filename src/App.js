import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Heartbeat from "./components/Heartbeat";
import Tape from "./components/Tape";
import Message from "./components/Morse";
import Static from "./components/Static";
import { Context } from "./context/Context";
import CodingPage from "./pages/CodingPage";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [contactFormColor, setContactFormColor] = useState(false);

  return (
    <>
      <Context.Provider
        value={{
          contactFormColor,
          setContactFormColor,
        }}
      >
        <Switch>
          <Route path="/coding" component={CodingPage} />
          <Route path="/static" component={Static} />
          <Route path="/message" component={Message} />
          <Route path="/tape" component={Tape} />
          <Route path="/heartbeat" component={Heartbeat} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
