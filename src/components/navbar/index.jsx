import React from "react";
import styled from "styled-components";

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

          <NavItem>Sign Up</NavItem>
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
`;

const LeftNavWrapper = styled.div`
  display: flex;
  flex: auto;
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

const RightNavWrapper = styled.div`
  width: 200px;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;
