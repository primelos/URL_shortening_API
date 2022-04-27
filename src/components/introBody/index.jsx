import React from "react";
import styled from "styled-components";

const IntroBody = () => {
  return (
    <IntroContainer>
      <BodyWrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
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
`;

const BodyWrapper = styled.div``;

const ImageWrapper = styled.div``;
