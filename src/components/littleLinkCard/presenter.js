import React from "react";
import styled from "styled-components";
import styles from "./style.module.css";

const Text = styled.div`
  color: #34495e;
  font-weight: 600;
  font-size: 13px;
  width: 150px;
`;

const LittleLinkCard = ({ text, iconType, to }) => {
  return (
    <div className={styles.middle}>
      <a className={styles.btn} href={to}>
        <i className={iconType} />
      </a>
      <Text>{text}</Text>
    </div>
  );
};

export default LittleLinkCard;
