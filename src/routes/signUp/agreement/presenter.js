import React from "react";
import styled from "styled-components";
import { Checkbox, Button, Icon } from "antd";

const Container = styled.div``;
const Text = styled.div``;

function SignUpAgreement({ checkBoxTapped }) {
  return (
    <Container>
      <Text>약관동의 페이지</Text>
      <Checkbox name={"1"} onChange={checkBoxTapped}>
        1
      </Checkbox>
      <Checkbox name="2" onChange={checkBoxTapped}>
        2
      </Checkbox>
      <Checkbox name="3" onChange={checkBoxTapped}>
        3
      </Checkbox>
      <Button type="primary">
        Forward
        <Icon type="right" />
      </Button>
    </Container>
  );
}

export default SignUpAgreement;
