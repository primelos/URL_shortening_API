import React from "react";
import styled from "styled-components";

const ButtonLink = (props) => {
  console.log("props", props);

  return (
    <ButtonWrapper>
      {props.copyState === true || props.copyState === false ? (
        <ButtonMeta
          onClick={(e) => {
            props.handleCopy(props.item.urlShort);
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
`;
