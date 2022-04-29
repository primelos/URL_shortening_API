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
`;

const BodyWrapper = styled.div`
  max-width: 60%;
  width: 60%;
  padding-bottom: 140px;
  h1 {
    font-size: 70px;
    font-weight: bold;
    width: 80%;
    max-width: 80%;
    margin: 60px 0 0 0;
  }
  p {
    width: 50%;
    color: grey;
    margin: 5px 0 30px 0;
  }
`;

const ImageWrapper = styled.div`
  max-width: 50%;
  img {
    max-width: 800px;
    max-height: 800px;
    color: #f0f1f6;
  }
`;
