import React from "react";
import styled from "styled-components";
import { Button, Icon } from "antd";

const Container = styled.div``;
const Text = styled.div``;

function authentication({ forwardButtonTapped }) {
  return (
    <Container>
      <Text>authentication page</Text>
      <Button onClick={forwardButtonTapped} type="primary">
        Forward
        <Icon type="right" />
      </Button>
    </Container>
  );
}

export default authentication;
