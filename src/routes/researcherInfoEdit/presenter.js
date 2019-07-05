import React from "react";
import styled from "styled-components";
import BigCircleIcon from "../../components/bigCircleIcon";
import LittleLinkCard from "../../components/littleLinkCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
`;
const VerticalLine = styled.div`
  width: 1px;
  height: 200px;
  background: gainsboro;
  margin-left: 40px;
  margin-right: 40px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Presenter = () => (
  <Container>
    <Card>
      <Column>
        <BigCircleIcon text={"연구자 정보 수정"} iconType={"fas fa-id-card"} />
      </Column>
      <VerticalLine />
      <Column
        style={{
          position: "relative",
          top: 70
        }}
      >
        <Row
          style={{
            marginBottom: 40
          }}
        >
          <LittleLinkCard text={"기본 정보"} iconType={"fas fa-user"} />
          <LittleLinkCard text={"학력 사항"} iconType={"fas fa-book"} />
          <LittleLinkCard text={"경력 사항"} iconType={"fas fa-briefcase"} />
        </Row>
        <Row
          style={{
            justifyContent: "center"
          }}
        >
          <div>
            <LittleLinkCard text={"논문 실적"} iconType={"fas fa-scroll"} />
          </div>
          <div>
            <LittleLinkCard
              text={"지적 재산권 실적"}
              iconType={"fas fa-coins"}
            />
          </div>
        </Row>
      </Column>
    </Card>
  </Container>
);

export default Presenter;
