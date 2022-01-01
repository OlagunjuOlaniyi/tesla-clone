import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const ModelY = () => {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
};

export default ModelY;

const Container = styled.div`
  overflow: hidden;
`;
