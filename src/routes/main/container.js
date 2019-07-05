import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    userState: "agencyAdmin"
  };
  render() {
    const userType = ["normal", "agencyAdmin", "intergrated"];
    let { userState } = this.state.userState;
    userState = userType[1];
    return <Presenter userState={userState} />;
  }
}

export default Container;
