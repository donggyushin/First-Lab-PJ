import React from "react";
import styled from "styled-components";
import RegistrationNumSearchComponent from "../registrationNumSearch";
import ResearcherInfoRegistration from "../researcherInfoRegistration";
import ModifyResearcherInfo from "../modifyResearcherInfo";
import "./style.css";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;
const BigText = styled.div`
  font-size: 37px;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const NormalUserInterface = () => {
  return (
    <Container>
      <div style={{ marginTop: 100, marginBottom: 30 }}>
        <BigText>국가 R&D 정보 공유 시스템</BigText>
      </div>
      <div>
        <Row>
          <RegistrationNumSearchComponent />
        </Row>
      </div>
      <Row>
        <div>
          <Column>
            <ResearcherInfoRegistration />
          </Column>
        </div>
        <div>
          <Column>
            <ModifyResearcherInfo />
          </Column>
        </div>
      </Row>
    </Container>
  );
};

export default NormalUserInterface;
