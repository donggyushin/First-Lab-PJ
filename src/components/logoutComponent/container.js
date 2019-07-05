import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { logout } = this.props;
    return <Presenter logout={logout} />;
  }
}

export default Container;
