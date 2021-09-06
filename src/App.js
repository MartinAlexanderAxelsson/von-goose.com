import React from "react";
import { Switch, Route } from "react-router-dom";
import form from "./components/Form";
import main from "./components/Main";
import Heartbeat from "./components/Heartbeat";
import Tape from "./components/Tape";
import Message from "./components/Morse";
import Static from "./components/Static";
import Coding from "./components/Coding";
// import "./App.css"
// import "./AppMobile.css"
//import "./coding.css"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/coding" component={Coding} />
        <Route path="/static" component={Static} />
        <Route path="/message" component={Message} />
        <Route path="/tape" component={Tape} />
        <Route path="/heartbeat" component={Heartbeat} />
        <Route path="/form" component={form} />
        <Route path="/" component={main} />
      </Switch>
    </div>
  );
}

export default App;
