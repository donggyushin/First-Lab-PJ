import React from "react";
import {
  Container,
  Title,
  YellowLine,
  Card,
  Icon,
  PageInfoText,
  NormalText,
  Row
} from "../components";

const Presenter = () => (
  <Container>
    <Title>Researcher Info</Title>
    <YellowLine />
    <Card>
      <Icon>
        <i
          style={{
            color: "#f0932b",
            fontSize: 20
          }}
          className={"fas fa-user"}
        />
      </Icon>
      <PageInfoText>Degree Info</PageInfoText>
      <Row>
        <NormalText>연구자 과학기술인등록번호:</NormalText>
        <NormalText>10000000</NormalText>
      </Row>
      <Row>
        <NormalText>학교명:</NormalText>
        <NormalText>상명대학교</NormalText>
      </Row>
      <Row>
        <NormalText>학과명:</NormalText>
        <NormalText>컴퓨터공학과</NormalText>
      </Row>
      <Row>
        <NormalText>전공명:</NormalText>
        <NormalText>컴퓨터 소프트웨어</NormalText>
      </Row>
      <Row>
        <NormalText>지도교수명:</NormalText>
        <NormalText>박현희</NormalText>
      </Row>
    </Card>
  </Container>
);

export default Presenter;
