import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const Model3 = () => {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
};

export default Model3;

const Container = styled.div`
  overflow: hidden;
`;
