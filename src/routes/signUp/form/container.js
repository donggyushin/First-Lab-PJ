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
    organization: 1,
    zipcode: "",
    fullAddress: "",
    address: "",
    cellphoneNumber: "",
    phoneNumber: "",
    faxNumber: "",
    typeOfUser: "전체",
    role: "선택",
    department: "",
    position: "",
    responsibility: "",
    recommendId: "",
    birthDay: ""
  };

  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, false);
  }

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
      organization,
      cellphoneNumber,
      phoneNumber,
      faxNumber,
      typeOfUser,
      role,
      department,
      position,
      responsibility,
      recommendId,
      address,
      birthDay
    } = this.state;
    const {
      radioChange,
      inputChange,
      doubleCheckButtonTapped,
      handleCancel,
      handleOk,
      openPopup,
      openJusoPopup,
      dateChange
    } = this;
    const { zipcode, fullAddress } = this.state;

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
        cellphoneNumber={cellphoneNumber}
        phoneNumber={phoneNumber}
        faxNumber={faxNumber}
        typeOfUser={typeOfUser}
        role={role}
        department={department}
        position={position}
        responsibility={responsibility}
        recommendId={recommendId}
        address={address}
        dateChange={dateChange}
        birthDay={birthDay}
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
        break;
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
      case "cellphone":
        this.setState({
          cellphoneNumber: value
        });
        break;
      case "phone":
        this.setState({
          phoneNumber: value
        });
        break;
      case "fax":
        this.setState({
          faxNumber: value
        });
        break;
      case "typeOfUser":
        this.setState({
          typeOfUser: value
        });
        break;
      case "role":
        this.setState({
          role: value
        });
        break;
      case "department":
        this.setState({
          department: value
        });
        break;
      case "position":
        this.setState({
          position: value
        });
        break;
      case "responsibility":
        this.setState({
          responsibility: value
        });
        break;
      case "recommendId":
        this.setState({
          recommendId: value
        });
        break;
      case "address":
        this.setState({
          address: value
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

  receiveMessage = event => {
    const { zonecode, fullAddress } = event.data;
    if (zonecode == null || fullAddress == null) return;
    this.setState({
      zipcode: zonecode,
      fullAddress
    });
  };

  dateChange = event => {
    this.setState({
      birthDay: event
    });
    console.log(this.state.birthDay);
  };
}

export default PersonalInformationFormContainer;
