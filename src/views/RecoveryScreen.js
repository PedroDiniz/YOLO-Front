import * as React from "react";
import styled from "styled-components";
import LaddaButton, { S, ZOOM_IN } from "react-ladda";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { forgotPassword } from "../actions/loginAction";
import fundo from "../assets/img/fundo.png";
import logo from "../assets/img/logo.png";
import melancia from "../assets/img/melancia.png";
import "../assets/css/custom.css";
import "../assets/css/ladda-button.min.css";
import "../assets/css/animate.min.css";

class RecoveryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: ""
    };
  }

  onSubmit = () => {
    this.props.history.push("/");
  };

  forgotPassword = () => {
    const { email } = this.state;
    this.props.dispatch(
      forgotPassword({ email }, () => {
        this.props.history.push("/redefine");
      })
    );
  };

  render() {
    const { email } = this.state;
    return (
      <SigninContainer>
        <LeftSide className="animated pulse">
          <LeftContainer>
            <SigninImage className="animated bounceInRight slow">
              <img
                src={logo}
                alt="logo"
                width="400"
                height="200"
                className="animated bounceInRight slow"
              />
            </SigninImage>
            <SigninForm className="animated fadeIn slow">
              <Span className="animated bounceInRight slow">
                <Txt className="animated fadeIn" to="/register">
                  Digite seu e-mail
                </Txt>
              </Span>
              <div
                style={{ marginTop: 50 }}
                className="group animated bounceInRight slow"
              >
                <input
                  type="text"
                  required
                  style={{
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF"
                  }}
                  value={email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <span className="highlight" />
                <span className="bar" />
                <label
                  style={{
                    color: "#FFFFFF"
                  }}
                >
                  Email
                </label>
              </div>
              <LaddaButton
                className="animated bounceInRight slow"
                data-color="#341933"
                data-size={S}
                data-style={ZOOM_IN}
                data-spinner-size={30}
                data-spinner-color="white"
                data-spinner-lines={12}
                onClick={this.forgotPassword}
              >
                Enviar
              </LaddaButton>
              <LaddaButton
                style={{ marginTop: 40 }}
                className="animated bounceInRight slow"
                data-color="#341933"
                data-size={S}
                data-style={ZOOM_IN}
                data-spinner-size={30}
                data-spinner-color="white"
                data-spinner-lines={12}
                onClick={this.onSubmit}
              >
                Cancelar
              </LaddaButton>
            </SigninForm>
          </LeftContainer>
        </LeftSide>
        <RightSide>
          <UpDiv>
            <img
              src={melancia}
              alt="melancia"
              width="600"
              height="600"
              className="animated bounceInRight slow"
            />
          </UpDiv>
        </RightSide>
      </SigninContainer>
    );
  }
}

const UpDiv = styled.div`
  left: 0px;
  top: 0px;
  z-index: 999;
  opacity: 1;
  filter: alpha(opacity=50);
`;

const LeftSide = styled.div`
  display: flex;
  flex: 1;
  background-color: #851d86
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center center
  width: 100%;
  height: 100vh;
`;

const RightSide = styled.div`
  display: flex
  flex: 2
  flex-direction: column
  justify-content: center
  align-items: center
  background: #cf9bcc ;
  background: -webkit-linear-gradient(to left, #e0bcdd, #cf9bcc );
  background: linear-gradient(to left,#e0bcdd, #cf9bcc );

`;

const LeftContainer = styled.div`
  display: flex
  flex: 2
  flex-direction: column
  justify-content: center
  align-items: center
`;
const SigninImage = styled.h1`
  padding-bottom: 20px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center center
  width: 400px;
  height: 200px;
  margin-bottom: 50px;
`;

const SigninContainer = styled.div`
  display: flex
  height: 100vh
  width: 100%;
`;

const Span = styled.span`
  margin-botton: 60px
  color: #FFBD4A
  font-weight: 600
  font-size: 14px
  padding-top: 10px
`;

const Txt = styled(Link)`
  margin-left: 10px
  color: #f0ddee
  text-align: center
  padding: 10px 0
  font-size: 14px
  font-weight: 600
  text-decoration: none
`;

const SigninForm = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  max-width: 250px
  color: white;

`;

export default connect(null)(RecoveryScreen);
