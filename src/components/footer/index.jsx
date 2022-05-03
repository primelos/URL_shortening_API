import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Shortly</Title>
      </TitleContainer>
      <LinksContainer>
        <RowContainer>
          <ShortCuth3>Features</ShortCuth3>
          <ShortCut>Link Shorting</ShortCut>
          <ShortCut>Branded Links</ShortCut>
          <ShortCut>Analytics</ShortCut>
        </RowContainer>
        <RowContainer>
          <ShortCuth3>Resources</ShortCuth3>
          <ShortCut>Blog</ShortCut>
          <ShortCut>Developers</ShortCut>
          <ShortCut>Support</ShortCut>
        </RowContainer>
        <RowContainer>
          <ShortCuth3>Company</ShortCuth3>
          <ShortCut>About</ShortCut>
          <ShortCut>Our Team</ShortCut>
          <ShortCut>Careers</ShortCut>
          <ShortCut>Contact</ShortCut>
        </RowContainer>
      </LinksContainer>
      <IconContainer>
        <Icon src="images/icon-facebook.svg" />
        <Icon src="images/icon-twitter.svg" />
        <Icon src="images/icon-pinterest.svg" />
        <Icon src="images/icon-instagram.svg" />
      </IconContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #232128;
  display: flex;
  height: 30vh;
  width: 100%;
  max-width: 100%;
  justify-content: space-evenly;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 30px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 10px;
`;

const Title = styled.h1`
  color: #fff;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
`;

const ShortCuth3 = styled.h3`
  color: #fff;
`;

const ShortCut = styled.a`
  color: #cccccc;
  font-size: 12px;
  padding: 10px 0;
  &:hover {
    color: #58d1d1;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 35px 10px 0 10px;
  &:hover {
    cursor: pointer;
    filter: invert(0.35) sepia(0.5) saturate(4.6) hue-rotate(151.2deg)
      brightness(1);
  }
`;
