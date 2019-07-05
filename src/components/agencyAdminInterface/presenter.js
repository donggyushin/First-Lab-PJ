import React from "react";
import styled from "styled-components";
import LinkCard from "../linkCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
const BigText = styled.div`
  font-size: 37px;
  color: #34495e;
`;

const Row = styled.div`
  display: flex;
`;

const Text = styled.div`
  color: #34495e;
  font-weight: 600;
`;

const AgencyAdminInterface = () => {
  return (
    <Container>
      <BigText
        style={{
          marginTop: 100,
          marginBottom: 30
        }}
      >
        국가 R&D 정보 공유 시스템
      </BigText>
      <Row
        style={{
          marginTop: 200
        }}
      >
        <div
          style={{
            marginTop: -87,
            marginRight: 15
          }}
        >
          <LinkCard
            text={"과학기술인등록번호 조회"}
            to={"/registration-number-lookup"}
            iconType={"fas fa-user"}
          />
        </div>
        <div
          style={{
            marginTop: -100,
            marginLeft: 15
          }}
        >
          <LinkCard text={"연구자정보 조회"} iconType={"fas fa-id-card"} />
        </div>
      </Row>
      <Text>기관 관리자 인터페이스</Text>
    </Container>
  );
};

export default AgencyAdminInterface;
