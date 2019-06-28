import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    visible: false
  };
  render() {
    const {
      checkBoxTapped,
      forwardButtonTapped,
      handleOk,
      handleCancel
    } = this;
    const { visible } = this.state;
    return (
      <Presenter
        checkBoxTapped={checkBoxTapped}
        forwardButtonTapped={forwardButtonTapped}
        handleCancel={handleCancel}
        handleOk={handleOk}
        visiable={visible}
      />
    );
  }

  checkBoxTapped = e => {
    const key = e.target.name;
    const checked = e.target.checked;
    switch (key) {
      case "1":
        this.setState({
          check1: checked
        });
        break;
      case "2":
        this.setState({
          check2: checked
        });
        break;
      case "3":
        this.setState({
          check3: checked
        });
        break;
      default:
        break;
    }
  };

  forwardButtonTapped = () => {
    const { check1, check2, check3 } = this.state;
    if (check1 && check2 && check3) {
      this.props.history.push("/signup/authentication");
    } else {
      this.showModal();
    }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
}

export default Container;
