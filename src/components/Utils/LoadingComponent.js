import * as React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingComponent = () => {
  return (
    <LoadingComponentContainer>
      <ReactLoading
        type={"spinningBubbles"}
        color="#0181cc"
        height={100}
        width={100}
      />
    </LoadingComponentContainer>
  );
};

const LoadingComponentContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  flex: 1
`;

export default LoadingComponent;
