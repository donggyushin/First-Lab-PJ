import React from "react";
import styled from "styled-components";
import NormalUserInterface from "../../components/normalUserInterface";
import AgencyUserInterface from "../../components/agencyAdminInterface";
import IntergratedAdminInterface from "../../components/intergratedAdminInterface";
const Container = styled.div``;
const Text = styled.div``;

function MainWebUserInterface({ userState }) {
  return (
    <Container>
      {userState === "normal" && <NormalUserInterface />}
      {userState === "agencyAdmin" && <AgencyUserInterface />}
      {userState === "intergrated" && <IntergratedAdminInterface />}
    </Container>
  );
}

export default MainWebUserInterface;
