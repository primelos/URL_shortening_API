import React from "react";
import styled from "styled-components";
import ButtonLink from "../buttonLink/ButtonLink";

const AdvancedStatistics = ({ shortenUrl, copyState, handleCopy }) => {
  return (
    <Container>
      {shortenUrl.length > 0 &&
        shortenUrl.map((item) => (
          <UrlShortLink key={item.id}>
            <ResultContainer>
              <OldLink>
                {item.urlOld.length < 20
                  ? `${item.urlOld}`
                  : `${item.urlOld.substring(0, 60)}...`}
              </OldLink>
              <LinkLine />
              <ShortLink
                href={"//" + item.urlShort}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://{item.urlShort}
              </ShortLink>
              <ButtonContainer>
                <ButtonLink
                  item={item}
                  copyState={copyState}
                  text={item.copyBool ? "Copied!" : "Copy"}
                  handleCopy={handleCopy}
                />
              </ButtonContainer>
            </ResultContainer>
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
            <img src="images/icon-brand-recognition.svg" alt="graph" />
          </ContentImage>
          <ContentTitle>Brand Recognition</ContentTitle>
          <ContentParagraph>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your contents.
          </ContentParagraph>
        </Content>
        <Content style={{ position: "relative", top: "173px" }}>
          <ContentImage>
            <img src="images/icon-detailed-records.svg" alt="speed dial" />
          </ContentImage>
          <ContentTitle>Detailed Records</ContentTitle>
          <ContentParagraph>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </ContentParagraph>
        </Content>
        <Content style={{ position: "relative", top: "213px" }}>
          <ContentImage>
            <img src="images/icon-fully-customizable.svg" alt="pen stylus" />
          </ContentImage>
          <ContentTitle>Fully Customizable</ContentTitle>
          <ContentParagraph>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </ContentParagraph>
        </Content>
      </ContentWrapper>
      <Line />
      <VerticalLine />
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
  @media screen and (max-width: 450px) {
    margin-left: -5vw;
    padding-left: 5vw;
    margin-right: -5vw;
    padding-right: 5vw;
  }
`;

const UrlShortLink = styled.div`
  width: 100%;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ResultContainer = styled.div`
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
  text-overflow: ellipsis;
  padding-top: 8px;
  padding-bottom: 8px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
    align-items: flex-start;
    padding-bottom: 10px;
    margin-top: 5px;
  }
`;

const OldLink = styled.a`
  flex: 1;
  text-align: left;
  text-overflow: ellipsis;
  @media screen and (max-width: 450px) {
    margin: 10px 0 10px 10px;
  }
`;
const ShortLink = styled.a`
  color: #58d1d1;
  text-decoration: none;
  @media screen and (max-width: 450px) {
    margin: 10px 0 10px 10px;
  }
`;

const ButtonContainer = styled.div`
  @media screen and (max-width: 450px) {
    width: 95%;
    border-radius: 5px;
    margin: 0 auto;
  }
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
  @media screen and (max-width: 450px) {
    width: 70%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div:nth-child(3) {
      top: 230px !important;
    }
  }
`;

const Content = styled.div`
  background-color: #fff;
  width: 284px;
  height: 208px;
  padding: 36px 10px 0px 10px;
  text-align: left;
  position: relative;
  z-index: 1;
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
  @media screen and (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;
const ContentTitle = styled.h2`
  font-family: "Poppins", sans-serif;
`;
const ContentParagraph = styled.p``;

const Line = styled.hr`
  border: 3px solid #58d1d1;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const LinkLine = styled.hr`
  display: none;

  @media screen and (max-width: 450px) {
    display: block;
    width: 100%;
    border: 1px solid #eff0f5;
    margin: 0;
  }
`;

const VerticalLine = styled.div`
  display: none;
  @media screen and (max-width: 450px) {
    display: block;
    border-left: 6px solid #58d1d1;
    height: 30%;
    position: absolute;
    left: 49.3%;
    padding: 100px 0;
    bottom: 120px;
  }
`;
