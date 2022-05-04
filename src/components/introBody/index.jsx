import React from "react";
import styled from "styled-components";
import Button from "../button";

const IntroBody = () => {
  return (
    <IntroContainer>
      <BodyWrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button text="Get Started"></Button>
      </BodyWrapper>
      <ImageWrapper>
        <img
          src="./images/illustration-working.svg"
          alt="person working at desk"
        />
      </ImageWrapper>
    </IntroContainer>
  );
};

export default IntroBody;

const IntroContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  padding-bottom: 80px;
  @media (max-width: 450px) {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const BodyWrapper = styled.div`
  max-width: 60%;
  width: 60%;
  padding-bottom: 140px;
  @media screen and (max-width: 450px) {
    max-width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 40px;
  }

  h1 {
    font-size: 70px;
    font-weight: bold;
    width: 80%;
    max-width: 80%;
    margin: 60px 0 0 0;
    @media screen and (max-width: 450px) {
      font-size: 40px;
    }
  }
  p {
    width: 50%;
    color: grey;
    margin: 5px 0 30px 0;
    @media screen and (max-width: 450px) {
      width: 61%;
    }
  }
`;

const ImageWrapper = styled.div`
  max-width: 50%;
  img {
    max-width: 800px;
    max-height: 800px;
    color: #f0f1f6;
  }
  @media screen and (max-width: 450px) {
    max-width: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
