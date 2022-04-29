import React from "react";
import styled from "styled-components";
import Button from "../button";

const BoostLinks = () => {
  return (
    <Container>
      <Title>Boost your links today</Title>
      <Button text="Get Started" />
    </Container>
  );
};

export default BoostLinks;

const Container = styled.div``;

const Title = styled.h1``;
