import React from "react";
import Authentication from "./presenter";

class AuthenticationContainer extends React.Component {
  render() {
    const { forwardButtonTapped } = this;
    return <Authentication forwardButtonTapped={forwardButtonTapped} />;
  }

  forwardButtonTapped = () => {
    this.props.history.push("/signup/form");
  };
}

export default AuthenticationContainer;
