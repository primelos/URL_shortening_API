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

const Container = styled.div`
  background-image: url("/images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  background-color: #3a3054;
  height: 140px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Title = styled.h1``;
