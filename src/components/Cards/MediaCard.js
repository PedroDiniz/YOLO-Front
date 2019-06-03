import React from "react";
import styled from "styled-components";
import axios from "axios";

class MediaCard extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {
    axios.get("http://localhost:3000/api/upload/listimage").then(response => {
      this.setState({ images: response.data });
      console.log("images: ", this.state.images);
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.images.map(image => {
          return (
            <CardWrapper>
              <CardHeader>
                <CardHeading>{image.name}</CardHeading>
              </CardHeader>

              <CardBody>
                <TextBox>
                  <img
                    src={"http://localhost:3000/static/uploads/" + image.name}
                  />
                </TextBox>
              </CardBody>
            </CardWrapper>
          );
        })}
      </React.Fragment>
    );
  }
}

export default MediaCard;

const CardWrapper = styled.div`
  flex: 1;
  padding: 0 0 32px;
  margin: 24px;
  margin-top: 100px
  width: 600px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const TextBox = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: Quicksand, arial, sans-serif;
`;
