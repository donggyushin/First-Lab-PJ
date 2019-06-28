import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebUserInterface from "./routes/main";
import LoginComponent from "./routes/login";
import SignupAgreement from "./routes/signUp/agreement";
import Authentication from "./routes/signUp/authentication";
import PersonalInformationForm from "./routes/signUp/form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WebUserInterface} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/signup/agreement" exact component={SignupAgreement} />
        <Route path="/signup/authentication" exact component={Authentication} />
        <Route path="/signup/form" exact component={PersonalInformationForm} />
        <Route component={WebUserInterface} />
      </Switch>
    </Router>
  );
}

export default App;
