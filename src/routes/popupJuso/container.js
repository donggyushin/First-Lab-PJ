import React from "react";
import DaumPostcode from "react-daum-postcode";

class Postcode extends React.Component {
  handleAddress = data => {
    let zonecode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    let result = {
      zonecode,
      fullAddress
    };
    window.opener.postMessage(result);
    console.log(this.props.changeFullAddress);
    this.props.changeFullAddress(result);
    window.close();
  };

  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, false);
  }

  render() {
    return <DaumPostcode onComplete={this.handleAddress} />;
  }

  receiveMessage(event) {
    console.log(event.data);
  }
}

export default Postcode;
