import React from "react";
import styled from "styled-components";
import Button from "../button";

const Navbar = () => {
  return (
    <NavContainer>
      <LeftNavWrapper>
        <LeftNav>
          <NavItem>Shortly</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Resources</NavItem>
        </LeftNav>
      </LeftNavWrapper>
      <RightNavWrapper>
        <RightNav>
          <NavItem>Login</NavItem>

          <Button text="Sign Up" />
        </RightNav>
      </RightNavWrapper>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 50px 0;
`;

const LeftNavWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const NavItem = styled.li`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-weight: bold;
  color: #9c9ba5;
  &:hover {
    color: #121117;
    cursor: pointer;
  }
`;
const LeftNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  width: 400px;
  li:first-child {
    font-family: "Source Sans Pro", sans-serif !important;
    font-size: 35px;
    color: #121117;
  }
  @media screen and (max-width: 450px) {
    li:not(:first-child) {
      display: none;
    }
  }
`;

const RightNavWrapper = styled.div`
  width: 258px;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin-right: 78px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
