import React from "react";
import styled from "styled-components";
import "./index.css";

const Text = styled.div`
  color: #34495e;
  font-weight: 600;
`;

const RegistrationNumSearchComponent = ({ text, iconType }) => {
  return (
    <div className="middle">
      <a className="btn" href="/#">
        <i className={iconType} />
      </a>
      <Text>{text}</Text>
    </div>
  );
};

export default RegistrationNumSearchComponent;
