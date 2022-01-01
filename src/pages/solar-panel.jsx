import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const SolarPanel = () => {
  return (
    <Container>
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
    </Container>
  );
};

export default SolarPanel;

const Container = styled.div`
  overflow: hidden;
`;
