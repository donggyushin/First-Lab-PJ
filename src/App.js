import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebUserInterface from "./routes/main";
import LoginComponent from "./routes/login";
import SignupAgreement from "./routes/signUp/agreement";

function App() {
  return (
    <Router>
      <Route path="/" exact component={WebUserInterface} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/signup/agreement" exact component={SignupAgreement} />
    </Router>
  );
}

export default App;
