import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebUserInterface from "./routes/main";
import LoginComponent from "./routes/login";
import SignupAgreement from "./routes/signUp/agreement";
import Authentication from "./routes/signUp/authentication";
import PersonalInformationForm from "./routes/signUp/form";
import Popup from "./routes/popup";
import PopupJuso from "./routes/popupJuso";
import LogoutButton from "./components/logoutComponent";
import RegistrationNumberLookup from "./routes/registrationNumberLookUp";
import ResearchInfoLookUp from "./routes/researcherInfoLookup";
import { ToastContainer } from "react-toastify";

class AppContainer extends React.Component {
  state = {
    zipcode: "",
    fullAddress: "",
    isLoggedIn: true
  };

  render() {
    const { zipcode, fullAddress, isLoggedIn } = this.state;
    const { changeFullAddress, logout } = this;

    return (
      <>
        {isLoggedIn ? (
          <PrivateComponent
            changeFullAddress={changeFullAddress}
            logout={logout}
          />
        ) : (
          <PublicComponent
            zipcode={zipcode}
            changeFullAddress={changeFullAddress}
            fullAddress={fullAddress}
          />
        )}
      </>
    );
  }

  changeFullAddress = data => {
    this.setState({
      zipcode: data.zonecode,
      fullAddress: data.fullAddress
    });
    console.log(this.state.zipcode);
  };

  logout = () => {
    this.setState({
      isLoggedIn: false
    });
  };
}

const PrivateComponent = ({ logout, changeFullAddress }) => (
  <Router>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        padding: 15
      }}
    >
      <LogoutButton logout={logout} />
    </div>
    <Switch>
      <Route path="/" exact component={WebUserInterface} />
      <Route
        path="/popup/juso"
        exact
        component={props => <PopupJuso changeFullAddress={changeFullAddress} />}
      />
      <Route
        path="/registration-number-lookup"
        component={RegistrationNumberLookup}
      />
      <Route path="/researcher-info-lookup" component={ResearchInfoLookUp} />
      <Route component={WebUserInterface} />
    </Switch>
    <ToastContainer />
  </Router>
);

const PublicComponent = ({ zipcode, fullAddress, changeFullAddress }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={LoginComponent} />
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
        component={props => <PopupJuso changeFullAddress={changeFullAddress} />}
      />
      <Route component={LoginComponent} />
    </Switch>
    <ToastContainer />
  </Router>
);

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
      <ToastContainer />
    </Router>
  );
}

export default AppContainer;
