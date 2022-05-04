import React from "react";
import styled from "styled-components";

const ButtonLink = (props) => {
  // console.log("props", props);

  return (
    <ButtonWrapper>
      {props.copyState === true || props.copyState === false ? (
        <ButtonMeta
          style={{ backgroundColor: props.item.copyBool ? "#393051" : "" }}
          onClick={(e) => {
            props.handleCopy(props.item);
          }}
        >
          {props.text}
        </ButtonMeta>
      ) : (
        <ButtonMeta type={props.type}>{props.text}</ButtonMeta>
      )}
    </ButtonWrapper>
  );
};

export default ButtonLink;

const ButtonWrapper = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
`;

const ButtonMeta = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-size: 13px;
  background-color: #58d1d1;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
    background-color: #9ce2e2;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
