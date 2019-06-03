import React from "react";
import { NavLink } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import logo from "../../assets/img/logo.png";
import { MdMenu } from "react-icons/md";

export default props => {
  return (
    <NavContainer className="animated fadeInDown">
      <ImgContainer>
        <img
          src={logo}
          alt="be-light"
          width="120"
          height="50"
          className="animated bounceIn slow"
        />
      </ImgContainer>
      <DesktopMenu>
        <LinkLi>
          <StyledLink to="/" exact activeClassName="Desktop_Nav_Active">
            Sair
          </StyledLink>
        </LinkLi>
        <LinkLi />
        <li>
          <StyledSpan onClick={props.handleMenuClick}>
            <MdMenu size="2em" />
          </StyledSpan>
        </li>
      </DesktopMenu>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #8c258d;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ImgContainer = styled.div`
  background-color: #8c258d;
`;

const DesktopMenu = styled.ul`
  display: flex;
  opacity: 1;
  height: 50px;
  transition: opacity 2s;
`;
const LinkLi = styled.li`
  flex: 1;
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;
const StyledLink = styled(NavLink)`
  padding: 0 20px;
  line-height: 50px;
  display: block;
  font-size: 0.8em;
  transition: color 0.5s linear;
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 890px) {
    font-size: 0.7em;
  }
  &:after {
    width: 100%;
    background-color: red;
    position: absolute;
    content: "";
    height: 0px;
    right: 0;
    z-index: -1;
    top: 0;
    transition: height 0.2s linear;
  }
  &:hover::after {
    width: 100%;
    background-color: blue;
    position: absolute;
    content: "";
    height: 50px;
    right: 0;
    bottom: 0;
  }
`;
const StyledSpan = styled.span`
  padding: 0 20px;
  color: white;
  line-height: 50px;
  display: block;
  font-size: 1em;
  transition: color 0.5s linear;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
injectGlobal`
  .Desktop_Nav_Active{
    color: #ff4d4f;
    pointer-events: none;
  }
`;
