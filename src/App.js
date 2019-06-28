import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebUserInterface from "./routes/main";
import LoginComponent from "./routes/login";
import SignupAgreement from "./routes/signUp/agreement";
import Authentication from "./routes/signUp/authentication";
import PersonalInformationForm from "./routes/signUp/form";
import Popup from "./routes/popup";
import PopupJuso from "./routes/popupJuso";

class AppContainer extends React.Component {
  state = {
    zipcode: "",
    fullAddress: ""
  };

  render() {
    const { zipcode, fullAddress } = this.state;
    const { changeFullAddress } = this;
    return (
      <App
        zipcode={zipcode}
        changeFullAddress={changeFullAddress}
        fullAddress={fullAddress}
      />
    );
  }

  changeFullAddress = data => {
    this.setState({
      zipcode: data.zonecode,
      fullAddress: data.fullAddress
    });
    console.log(this.state.zipcode);
  };
}

function App({ zipcode, fullAddress, changeFullAddress }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WebUserInterface} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/signup/agreement" exact component={SignupAgreement} />
        <Route path="/signup/authentication" exact component={Authentication} />
        <Route
          path="/signup/form"
          exact
          component={props => (
            <PersonalInformationForm
              zipcode={zipcode}
              fullAddress={fullAddress}
            />
          )}
        />
        <Route path="/popup" exact component={Popup} />
        <Route
          path="/popup/juso"
          exact
          component={props => (
            <PopupJuso changeFullAddress={changeFullAddress} />
          )}
        />
        <Route component={WebUserInterface} />
      </Switch>
    </Router>
  );
}

export default AppContainer;
