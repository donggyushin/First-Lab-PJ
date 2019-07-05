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
      <PageInfoText>Basic Info</PageInfoText>
      <Row>
        <NormalText>연구자 과학기술인등록번호:</NormalText>
        <NormalText>10000000</NormalText>
      </Row>
      <Row>
        <NormalText>연구자 이름:</NormalText>
        <NormalText>홍길동</NormalText>
      </Row>
      <Row>
        <NormalText>연구자 이름(영문):</NormalText>
        <NormalText>Hong Gil Dong</NormalText>
      </Row>
      <Row>
        <NormalText>생년월일:</NormalText>
        <NormalText>2019년 05월 13일</NormalText>
      </Row>
      <Row>
        <NormalText>성별:</NormalText>
        <NormalText>남</NormalText>
      </Row>
    </Card>
  </Container>
);

export default Presenter;
