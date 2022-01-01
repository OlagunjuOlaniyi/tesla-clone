import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const SolarRoof = () => {
  return (
    <Container>
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roofs"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
    </Container>
  );
};

export default SolarRoof;

const Container = styled.div`
  overflow: hidden;
`;
