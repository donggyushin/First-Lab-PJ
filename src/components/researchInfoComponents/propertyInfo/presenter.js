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
      <PageInfoText>Career Info</PageInfoText>
      <Row>
        <NormalText>연구자 과학기술인등록번호:</NormalText>
        <NormalText>10000000</NormalText>
      </Row>
      <Row>
        <NormalText>특허명:</NormalText>
        <NormalText> </NormalText>
      </Row>
      <Row>
        <NormalText>특허 구분:</NormalText>
        <NormalText> </NormalText>
      </Row>
      <Row>
        <NormalText>특허 번호:</NormalText>
        <NormalText> </NormalText>
      </Row>
      <Row>
        <NormalText>발명인:</NormalText>
        <NormalText> </NormalText>
      </Row>
    </Card>
  </Container>
);

export default Presenter;
