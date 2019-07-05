import React from "react";
import styled from "styled-components";
import Basic from "../../components/researchInfoComponents/basicInfo";
import Degree from "../../components/researchInfoComponents/degreeInfo";
import Career from "../../components/researchInfoComponents/careerInfo";
import Paper from "../../components/researchInfoComponents/paperInfo";
import Property from "../../components/researchInfoComponents/propertyInfo";
const Container = styled.div``;

const Presenter = ({ path }) => (
  <Container>
    {path === "basic" && <Basic />}
    {path === "degree" && <Degree />}
    {path === "career" && <Career />}
    {path === "paper" && <Paper />}
    {path === "property" && <Property />}
  </Container>
);

export default Presenter;
