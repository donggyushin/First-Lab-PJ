import React from "react";
import styled from "styled-components";
import NormalUserInterface from "../../components/normalUserInterface";

const Container = styled.div``;
const Text = styled.div``;

function MainWebUserInterface({ userState }) {
  return (
    <Container>{userState === "normal" && <NormalUserInterface />}</Container>
  );
}

export default MainWebUserInterface;
