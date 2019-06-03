import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import styled, { injectGlobal } from "styled-components";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MenuToggled: false };
  }
  handleMenuClick() {
    if (this.state.MenuToggled) {
      this.setState({ MenuToggled: false });
      document.body.className = "";
    } else {
      this.setState({ MenuToggled: true });
      document.body.className = "OverFlow";
    }
  }
  render() {
    return (
      <Container>
        <Nav>
          <DesktopNavigation
            handleMenuClick={this.handleMenuClick.bind(this)}
          />
          <MobileNavigation
            MenuToggled={this.state.MenuToggled}
            handleMenuClick={this.handleMenuClick.bind(this)}
          />
        </Nav>
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: 99;
`;

const Nav = styled.header`
  display: block;
  clear: both;
  font-size: 1.3em;
  height: 50px;
  @media print {
    height: 120px;
  }
`;
injectGlobal`
  body.OverFlow{
    overflow: hidden;
    padding-right: 20px;
  }
`;
