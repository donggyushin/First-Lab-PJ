import React from "react";
import styled from "styled-components";
import Colors from "../../constants/colors";
import { DateInput } from "@opuscapita/react-dates";
import { Button, Input, Radio } from "antd";
import BigCircleIcon from "../../components/bigCircleIcon";
import "./index.css";

const Container = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${Colors.charcoleText};
`;
const Text = styled.div``;

const Card = styled.div`
  display: flex;
  position: relative;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.deepOrange};
  opacity: 0;
  border-radius: 25px;
  z-index: -1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  background-color: ${Colors.deepOrange};
`;

const Presenter = ({ iconLoading, enterIconLoading }) => (
  <Container>
    <Card>
      <CardBackground />
      <Column
        style={{
          marginRight: 50,
          alignItems: "center"
        }}
      >
        {/* <IconContainer
          style={{
            padding: 25,
            borderRadius: "50%",
            marginBottom: 20
          }}
        >
          <i
            style={{
              color: "white",
              fontSize: 100
            }}
            className={"fas fa-user"}
          />
        </IconContainer>
        <Text>과학기술인등록번호 조회</Text> */}
        <BigCircleIcon
          iconType={"fas fa-user"}
          text={"과학기술인등록번호 조회"}
        />
      </Column>
      <Column>
        <Row>
          <Text
            style={{
              width: 150
            }}
          >
            연구자 이름
          </Text>
          <Input
            style={{
              width: 200,
              marginRight: 20
            }}
          />
        </Row>
        <Row>
          <Text
            style={{
              width: 150
            }}
          >
            성별
          </Text>
          <Radio.Group
            style={{
              width: 200,
              marginLeft: 40
            }}
            value={1}
          >
            <Radio value={1}>남</Radio>
            <Radio value={2}>여</Radio>
          </Radio.Group>
        </Row>
        <Row>
          <Text
            style={{
              width: 150
            }}
          >
            출생연도
          </Text>

          <DateInput
            dateFormat="dd/MM/yyyy"
            disabled={false}
            locale="en"
            onChange={null}
            value={null}
          />
        </Row>
        <Row>
          <Text
            style={{
              width: 150
            }}
          >
            핸드폰 번호
          </Text>
          <Input
            style={{
              width: 200
            }}
            placeholder="- 없이 입력해주세요. "
          />
        </Row>
        <Row
          style={{
            justifyContent: "flex-end"
          }}
        >
          <Button
            icon="poweroff"
            loading={iconLoading}
            onClick={enterIconLoading}
            type={"primary"}
            style={{
              marginTop: 30,
              marginRight: 40
            }}
          >
            Search
          </Button>
        </Row>
      </Column>
    </Card>
  </Container>
);

export default Presenter;
