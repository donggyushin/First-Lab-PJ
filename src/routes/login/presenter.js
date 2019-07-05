import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
import Colors from "../../constants/colors";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div``;

const BigText = styled.div`
  margin-top: 100px;
  font-size: 37px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  margin-bottom: 150px;
  border-radius: 5px;
  width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.div`
  margin-bottom: 10px;
  margin-top: 23px;
`;

const SmallTextCursorPointer = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${Colors.charcoleText};
`;

function LoginComponent(props) {
  return (
    <Container>
      <TextContainer>
        <BigText>국가 정보 R&D 정보 공유 시스템</BigText>
      </TextContainer>
      <Card>
        <SmallText>Username</SmallText>
        <Input allowClear />
        <SmallText>Password</SmallText>
        <Input.Password />
        <SmallTextCursorPointer style={{ marginTop: 20, marginBottom: 10 }}>
          비밀번호를 잊어버리셨습니까?
        </SmallTextCursorPointer>
        <Button type="primary" icon="poweroff">
          Click me!
        </Button>
        <Link to={"/signup/agreement"} style={{ textDecoration: "none" }}>
          <SmallTextCursorPointer
            style={{
              textAlign: "center",
              marginTop: 20
            }}
          >
            Sign Up
          </SmallTextCursorPointer>
        </Link>
      </Card>
    </Container>
  );
}

export default LoginComponent;
