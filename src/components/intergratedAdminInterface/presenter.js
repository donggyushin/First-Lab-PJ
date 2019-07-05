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

const Presenter = () => {
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
          marginTop: 100
        }}
      >
        <div
          style={{
            marginRight: 15
          }}
        >
          <LinkCard text={"기관 관리자 추가"} iconType={"fas fa-user-plus"} />
        </div>
        <div
          style={{
            marginLeft: 15
          }}
        >
          <LinkCard text={"기관 관리자 삭제"} iconType={"fas fa-user-minus"} />
        </div>
      </Row>
      <Text>통합 관리자 인터페이스</Text>
    </Container>
  );
};

export default Presenter;
