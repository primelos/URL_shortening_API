import React from "react";
import styled from "styled-components";
import ButtonLink from "../buttonLink/ButtonLink";

const AdvancedStatistics = ({ shortenUrl, copyState, handleCopy }) => {
  return (
    <Container>
      {shortenUrl.length > 0 &&
        shortenUrl.map((item) => (
          <UrlShortLink key={item.id}>
            <OldLink>{item.urlOld}</OldLink>
            <ShortLink href={item.urlShort}>{item.urlShort}</ShortLink>
            <ButtonLink
              item={item}
              copyState={copyState}
              text={copyState ? "Copied!" : "Copy"}
              handleCopy={handleCopy}
            />
          </UrlShortLink>
        ))}

      <TitleWrapper>
        <Title>Advance Statistics</Title>
        <Paragraph>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
      </TitleWrapper>
      <ContentWrapper>
        <Content style={{ position: "relative", top: "119px" }}>
          <ContentImage>
            <img w src="images/icon-brand-recognition.svg" alt="" />
          </ContentImage>
          <ContentTitle>Brand Recognition</ContentTitle>
          <ContentParagraph>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your contents.
          </ContentParagraph>
        </Content>
        <Content style={{ position: "relative", top: "179px" }}>
          <ContentImage>
            <img src="images/icon-detailed-records.svg" alt="" />
          </ContentImage>
          <ContentTitle>Detailed Records</ContentTitle>
          <ContentParagraph>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </ContentParagraph>
        </Content>
        <Content style={{ position: "relative", top: "213px" }}>
          <ContentImage>
            <img src="images/icon-fully-customizable.svg" alt="" />
          </ContentImage>
          <ContentTitle>Fully Customizable</ContentTitle>
          <ContentParagraph>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </ContentParagraph>
        </Content>
      </ContentWrapper>
      <Line />
    </Container>
  );
};

export default AdvancedStatistics;

const Container = styled.div`
  background-color: #eff0f5;
  height: 100%;
  text-align: center;
  padding-top: 200px;
  margin-left: -300vw;
  padding-left: 300vw;
  margin-right: -300vw;
  padding-right: 300vw;
  position: relative;
  top: 20px;
  padding-bottom: 300px;
`;

const UrlShortLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  bottom: 125px;
  padding-left: 15px;
  margin: 15px 0;
  font-family: "Poppins", sans-serif;
  /* font-weight: 1s00; */
`;
const OldLink = styled.a`
  flex: 1;
`;
const ShortLink = styled.a`
  color: #58d1d1;
  text-decoration: none;
`;

const TitleWrapper = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
`;

const Paragraph = styled.p`
  width: 25%;
  text-align: center;
  margin: auto;
  color: grey;
  font-family: "Poppins", sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Content = styled.div`
  background-color: #fff;
  width: 284px;
  height: 208px;
  padding: 36px 10px 0px 10px;
  text-align: left;
  position: relative;
`;

const ContentImage = styled.div`
  border-radius: 50%;
  background-color: #3a2f55;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: absolute;
  top: -30px;
  left: 25px;
  img {
    width: 30px;
    height: 30px;
  }
`;
const ContentTitle = styled.h2`
  font-family: "Poppins", sans-serif;
`;
const ContentParagraph = styled.p``;

const Line = styled.hr`
  border: 3px solid #58d1d1;
`;
