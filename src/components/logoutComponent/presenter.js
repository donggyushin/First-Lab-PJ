import React from "react";
import styled from "styled-components";
import Colors from "../../constants/colors";
import "./index.css";

const Container = styled.div`
  background: ${Colors.deepOrange};
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 10px 22px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 22px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 22px -12px rgba(0, 0, 0, 0.75);
  &:hover {
    background: ${Colors.lightOrange};
    transition: 0.3s ease-in-out;
  }
`;
const Text = styled.div`
  color: ${Colors.deepOrange};
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Presenter = ({ logout }) => (
  <Column className={"LogoutComponentContainer"}>
    <Container onClick={logout}>
      <i
        style={{
          fontSize: 20,
          color: "white"
        }}
        className="fas fa-sign-out-alt"
      />
    </Container>
    <Text>Logout</Text>
  </Column>
);

export default Presenter;
