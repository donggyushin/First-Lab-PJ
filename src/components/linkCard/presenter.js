import React from "react";
import styled from "styled-components";
import "./index.css";

const Text = styled.div`
  color: #34495e;
  font-weight: 600;
  font-size: 17px;
  width: 150px;
`;

const RegistrationNumSearchComponent = ({ text, iconType, to }) => {
  return (
    <div className="middle">
      <a className="btn" href={to}>
        <i className={iconType} />
      </a>
      <Text>{text}</Text>
    </div>
  );
};

export default RegistrationNumSearchComponent;
