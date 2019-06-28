import React from "react";
import styled from "styled-components";
import { Checkbox, Button, Icon, Modal } from "antd";

const Container = styled.div``;
const Text = styled.div``;

function SignUpAgreement({
  checkBoxTapped,
  forwardButtonTapped,
  handleCancel,
  handleOk,
  visiable
}) {
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
      <Button onClick={forwardButtonTapped} type="primary">
        Forward
        <Icon type="right" />
      </Button>
      <Modal
        title="Basic Modal"
        visible={visiable}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Container>
  );
}

export default SignUpAgreement;
