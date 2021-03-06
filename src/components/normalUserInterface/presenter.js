import React from "react";
import styled from "styled-components";
import LinkCard from "../linkCard";
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
  color: #34495e;
`;

const Row = styled.div`
  display: flex;
`;

const Text = styled.div`
  color: #34495e;
  font-weight: 600;
`;

const NormalUserInterface = () => {
  return (
    <Container>
      <div style={{ marginTop: 100, marginBottom: 30 }}>
        <BigText>국가 R&D 정보 공유 시스템</BigText>
      </div>
      <div>
        <Row
          style={{
            marginTop: 100
          }}
        >
          <LinkCard
            to={"/registration-number-lookup"}
            text={"과학기술인등록번호 조회"}
            iconType={"fas fa-user"}
          />
          <div
            style={{
              marginRight: 20,
              marginLeft: 20,
              marginTop: 58
            }}
          >
            <LinkCard text={"연구자 정보 등록"} iconType={"fas fa-user-plus"} />
          </div>
          <LinkCard
            text={"연구자 정보 수정"}
            to={"/researcher-info-edit"}
            iconType={"fas fa-user-edit"}
          />
        </Row>
      </div>
      <Text>일반 사용자 인터페이스</Text>
    </Container>
  );
};

export default NormalUserInterface;
