import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    check1: false,
    check2: false,
    check3: false
  };
  render() {
    const { checkBoxTapped } = this;
    return <Presenter checkBoxTapped={checkBoxTapped} />;
  }

  checkBoxTapped = e => {
    console.log(`name = ${e.target.name}`);
    console.log(`checked = ${e.target.checked}`);
  };
}

export default Container;
