import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import form from "./components/Form";
import main from "./components/Main";
import Heartbeat from "./components/Heartbeat";
import Tape from "./components/Tape";
import Message from "./components/Morse";
import Static from "./components/Static";
import Coding from "./components/Coding";
import { Context } from "./context/Context";

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
          <Route path="/coding" component={Coding} />
          <Route path="/static" component={Static} />
          <Route path="/message" component={Message} />
          <Route path="/tape" component={Tape} />
          <Route path="/heartbeat" component={Heartbeat} />
          <Route path="/form" component={form} />
          <Route path="/" component={main} />
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
