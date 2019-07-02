import React from "react";
import Presenter from "./presenter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    birthDay: new Date(),
    email: "",
    errorMessages: []
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
      birthDay,
      email
    } = this.state;
    const {
      radioChange,
      inputChange,
      doubleCheckButtonTapped,
      handleCancel,
      handleOk,
      openPopup,
      openJusoPopup,
      dateChange,
      integrityCheck,
      errorMessageClicked,
      selectChange
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
        email={email}
        integrityCheck={integrityCheck}
        errorMessageClicked={errorMessageClicked}
        selectChange={selectChange}
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
      case "email":
        this.setState({
          email: value
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
  selectChange = event => {
    this.setState({
      typeOfUser: event
    });
  };

  integrityCheck = () => {
    const {
      username,
      userID,
      password1,
      password2,
      zipcode,
      fullAddress,
      cellphoneNumber,
      phoneNumber,
      typeOfUser,
      birthDay,
      email
    } = this.state;

    // Check if there is any empty value
    if (
      userID === "" ||
      username === "" ||
      password1 === "" ||
      password2 === "" ||
      zipcode === "" ||
      fullAddress === "" ||
      typeOfUser === "전체" ||
      email === ""
    ) {
      console.log(
        "userid",
        userID,
        "username",
        username,
        "password1",
        password1,
        "password2",
        password2,
        "zipcode",
        zipcode,
        "fulladdress",
        fullAddress,
        "typeofuser",
        typeOfUser,
        "email",
        email
      );
      toast.warn("선택입력이 아닌 곳 중 입력이 안된 곳이 있습니다.", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    } else if (cellphoneNumber === "" && phoneNumber === "") {
      toast.warn("핸드폰 번호와 일반 전화번호 중 한 군데는 입력을 해주세요.", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    } else if (!birthDay instanceof Date) {
      toast.warn("생년월일 입력양식이 잘못되었습니다.", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    }

    // Check password1 === password2
    if (password1 !== password2) {
      toast.warn("비밀번호를 제대로 입력했나 확인해주세요. ", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    }
    // then you can go next step

    console.log("next");
  };
}

export default PersonalInformationFormContainer;
