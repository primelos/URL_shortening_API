import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <ButtonContainer>{props.text}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  border: none;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 8px 20px;
  background-color: #58d1d1;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
    background-color: #9ce2e2;
  }
  @media screen and (max-width: 450px) {
    padding: 12px 42px;
  }
`;
