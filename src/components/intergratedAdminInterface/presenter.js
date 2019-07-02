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
          marginTop: 80
        }}
      >
        <div
          style={{
            marginRight: 10
          }}
        >
          <LinkCard text={"기관 관리자 추가"} iconType={"fas fa-user-plus"} />
        </div>
        <div
          style={{
            marginLeft: 10
          }}
        >
          <LinkCard text={"기관 관리자 삭제"} iconType={"fas fa-user-minus"} />
        </div>
      </Row>
    </Container>
  );
};

export default Presenter;
