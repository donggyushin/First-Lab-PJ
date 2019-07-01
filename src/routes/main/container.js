import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    userState: "normal"
  };
  render() {
    const { userState } = this.state;
    return <Presenter userState={userState} />;
  }
}

export default Container;
