import * as React from "react";
import styled from "styled-components";
import Loading from "../components/Utils/LoadingComponent";
import MediaCard from "../components/Cards/MediaCard";
import { connect } from "react-redux";

import NavBar from "../components/NavBar/Navbar";

import "../assets/css/custom.css";
import "../assets/css/ladda-button.min.css";
import "../assets/css/animate.min.css";

class FeedScreen extends React.Component {
  render() {
    return (
      <Container>
        <NavBar />
        <MediaCard />
      </Container>
    );
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  margin: 0 auto;
`;

export default FeedScreen;
