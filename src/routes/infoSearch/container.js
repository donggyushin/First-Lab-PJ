import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    path: ""
  };
  componentDidMount() {
    const { path } = this.props.match.params;
    this.setState({
      path
    });
  }
  render() {
    const { path } = this.state;
    return <Presenter path={path} />;
  }
}

export default Container;
