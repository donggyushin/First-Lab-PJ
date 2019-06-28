import React from "react";
import Presenter from "./presenter";

class PersonalInformationFormContainer extends React.Component {
  state = {
    gender: 1,
    local: 1,
    username: "",
    englishName: "",
    userID: "",
    password1: "",
    password2: "",
    visible: false,
    organization: 1
  };

  render() {
    const {
      gender,
      local,
      username,
      englishName,
      userID,
      password1,
      password2,
      visible,
      organization
    } = this.state;
    const {
      radioChange,
      inputChange,
      doubleCheckButtonTapped,
      handleCancel,
      handleOk,
      openPopup,
      openJusoPopup
    } = this;
    const { zipcode, fullAddress } = this.props;
    console.log("asdasdasd");
    console.log(this.props.zipcode, fullAddress);
    return (
      <Presenter
        gender={gender}
        inputChange={inputChange}
        radioChange={radioChange}
        local={local}
        username={username}
        englishName={englishName}
        userID={userID}
        password1={password1}
        password2={password2}
        doubleCheckButtonTapped={doubleCheckButtonTapped}
        handleCancel={handleCancel}
        handleOk={handleOk}
        visible={visible}
        openPopup={openPopup}
        organization={organization}
        openJusoPopup={openJusoPopup}
        zipcode={zipcode}
        fullAddress={fullAddress}
      />
    );
  }

  radioChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "gender":
        this.setState({
          gender: value
        });
        break;
      case "local":
        this.setState({
          local: value
        });
        break;
      case "organization":
        this.setState({
          organization: value
        });
      default:
        break;
    }
  };

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "username":
        this.setState({
          username: value
        });
        break;
      case "english name":
        this.setState({
          englishName: value
        });
        break;
      case "userID":
        this.setState({
          userID: value
        });
        break;
      case "password1":
        this.setState({
          password1: value
        });
        break;
      case "password2":
        this.setState({
          password2: value
        });
        break;
      default:
        break;
    }
  };

  doubleCheckButtonTapped = () => {
    this.showModal();
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

  openPopup = () => {
    window.open("/popup", "pop", "location=0, width=500, height=500");
  };

  openJusoPopup = () => {
    window.open("/popup/juso", "pop", "width=700, height=450");
  };
}

export default PersonalInformationFormContainer;
