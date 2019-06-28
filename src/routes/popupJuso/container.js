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
    console.log(this.props.changeFullAddress);
    this.props.changeFullAddress(result);
  };

  render() {
    return <DaumPostcode onComplete={this.handleAddress} />;
  }
}

export default Postcode;
