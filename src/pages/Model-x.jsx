import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const ModelX = () => {
  return (
    <Container>
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
};

export default ModelX;

const Container = styled.div`
  overflow: hidden;
`;
