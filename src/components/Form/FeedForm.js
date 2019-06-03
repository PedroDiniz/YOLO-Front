import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { MdPhoto } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";

class FeedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      title: "",
      content: "",
      category: "",
      typeMedia: "NULL",
      linkMedia: ""
    };
  }

  toggle = () => {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  };

  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const { title, content, linkMedia, typeMedia } = this.state;
    return (
      <div>
        <Container>
          <Accordion className={activeClass}>
            <Header className="accordionHeader" onClick={this.toggle}>
              Postar
            </Header>
            <Content className="folding-pannel content">
              <Input
                placeholder="Título do Post"
                type="text"
                value={title}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
              />
              <TextArea
                placeholder="Digite um texto aqui."
                value={content}
                onChange={e => {
                  this.setState({ content: e.target.value });
                }}
              />

              <BtnContainer>
                {this.props.hasCategory ? (
                  <select
                    className="select-css"
                    onChange={e => this.setState({ category: e.target.value })}
                  >
                    {this.props.categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                ) : null}
                <MdPhoto
                  size="2em"
                  style={{
                    cursor: "pointer",
                    color: "gray"
                  }}
                  onClick={() =>
                    typeMedia !== "IMAGE"
                      ? this.setState({ typeMedia: "IMAGE" })
                      : this.setState({ typeMedia: "NULL" })
                  }
                />
                <MdVideoLibrary
                  size="2em"
                  style={{
                    cursor: "pointer",
                    color: "gray"
                  }}
                  onClick={() =>
                    typeMedia !== "VIDEO"
                      ? this.setState({ typeMedia: "VIDEO" })
                      : this.setState({ typeMedia: "NULL" })
                  }
                />
                <MdPictureAsPdf
                  size="2em"
                  style={{
                    cursor: "pointer",
                    color: "gray"
                  }}
                  onClick={() =>
                    typeMedia !== "PDF"
                      ? this.setState({ typeMedia: "PDF" })
                      : this.setState({ typeMedia: "NULL" })
                  }
                />
              </BtnContainer>
              {typeMedia !== "NULL" ? (
                <Input
                  placeholder="Link"
                  type="text"
                  value={linkMedia}
                  onChange={e => {
                    this.setState({ linkMedia: e.target.value });
                  }}
                  style={{
                    marginBottom: "40px"
                  }}
                />
              ) : null}
              <Btn
                onClick={
                  this.props.feedForm ? this.newPost : this.newPostRecipe
                }
              >
                Postar
              </Btn>
            </Content>
          </Accordion>
        </Container>
      </div>
    );
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const Accordion = styled.div`
  flex: 1;
  width: 600px;
  margin-top: 80px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const Header = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 5px 5px 5px 5px;
  margin: 10px 10px 10px 10px;
  width: 95%;
  height: 150px;
  resize: none;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  font-family: "proxima-nova", sans-serif;
`;

const Input = styled.input`
  flex: 1;
  width: 95%;
  padding: 0.5em;
  margin: 0.8em;
  color: Black;
  background: white;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  font-family: "proxima-nova", sans-serif;
`;

const Btn = styled.button`
  cursor: pointer;
  flex-wrap: wrap;
  font-size: 12px;
  width: 140px;
  height: 35px;
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 8px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 20px;
`;

const mapStateToProps = state => ({
  categories: state.recipeReducer.categories
});

export default connect(mapStateToProps)(FeedForm);
