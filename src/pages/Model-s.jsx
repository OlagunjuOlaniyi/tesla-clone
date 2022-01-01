import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const ModelS = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
};

export default ModelS;

const Container = styled.div`
  overflow: hidden;
`;
