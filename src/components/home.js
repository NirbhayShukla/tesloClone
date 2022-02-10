import React from "react";
import styled from "styled-components";
import Section from "./section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Online Order for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImage="model-s.jpg"
      />
      <Section
        title="Model 3"
        description="Online Order for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImage="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Online Order for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImage="model-x.jpg"
      />
      <Section
        title="Model Y"
        description="Online Order for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImage="model-y.jpg"
      />
      <Section
        title="Solar For New Roofs"
        description="Costs Less than New Roofs plus Solar Panels"
        leftButton="Order Now"
        rightButton="Learn More"
        backgroundImage="solar-roof.jpg"
      />
      <Section
        title="Solar Panels"
        description="Money Back Guarantee"
        leftButton="Order Now"
        rightButton="Learn More"
        backgroundImage="solar-panel.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftButton="Order Now"
        rightButton=""
        backgroundImage="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
height =100vh;
`;
