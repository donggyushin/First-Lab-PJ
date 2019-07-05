import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    iconLoading: false
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const { iconLoading } = this.state;
    const { enterIconLoading } = this;
    return (
      <Presenter
        iconLoading={iconLoading}
        enterIconLoading={enterIconLoading}
      />
    );
  }
}

export default Container;
