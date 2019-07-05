import React from "react";
import styled from "styled-components";
import Colors from "../../constants/colors";

const IconContainer = styled.div`
  background-color: ${Colors.deepOrange};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: ${Colors.charcoleText};
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
`;

const Presenter = ({ iconType, text }) => (
  <Container>
    <IconContainer
      style={{
        padding: 25,
        borderRadius: "50%",
        marginBottom: 20,
        marginTop: 0
      }}
    >
      <i
        style={{
          color: "white",
          fontSize: 100
        }}
        className={iconType}
      />
    </IconContainer>
    <Text
      style={{
        marginTop: 0,
        marginBottom: 0
      }}
    >
      {text}
    </Text>
  </Container>
);

export default Presenter;
