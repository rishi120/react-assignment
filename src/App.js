import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Useroutput from "./components/useroutput";
import Userinput from "./components/userinput";
import Maincontent from "./components/jumbotron";
import Capabilities from "./components/capabilities";
import Cards from "./components/cards";
import "./App.css";
import "./components/user.css";
import imgPath from "./images/client.jpeg";
import imgPath1 from "./images/client2.jpeg";
import imgPath2 from "./images/life1.png";
import imgPath3 from "./images/life2.png";
import imgPath4 from "./images/life3.png";
import imgPath5 from "./images/life4.png";
import Story from "./components/story";
import Mycorner from "./components/my-corner";
import HideAppBar from "./components/menus";

class App extends Component {
  state = {
    output: [{ name: "Chandan" }, { name: "Rishiraj" }],
    updateDetails: [
      {
        cardHeading: "I am Heading",
      },
      {
        cardParagraph: "I am Paragraph",
      },
    ],
  };

  updateuserName = (newName) => {
    this.setState({
      output: [{ name: newName }, { name: "Rishiraj" }],
    });
  };

  namechangedHandler = (updateName) => {
    this.setState({
      output: [
        { name: updateName.target.value },
        { name: updateName.target.value },
      ],
    });
  };
  updateButton = () => {
    console.log("Hi");
  };
  render() {
    const wrapper = {
      margin: "50px 0",
      padding: "20px",
      border: "1px solid #eee",
    };
    const button = {
      border: "1px solid #eee",
      backgroundColor: "#fff",
      font: "inherit",
      borderRadius: "3px",
      padding: "5px",
      width: "60%",
      fontSize: "15px",
    };
    return (
      <div className="App">
        <Container>
          <HideAppBar />
          <Maincontent> </Maincontent>
          <div style={wrapper}>
            <Row>
              <Useroutput
                username={this.state.output[0].name}
                paragraph="Hey There! Wassup"
              >
                <button
                  style={button}
                  type="button"
                  onClick={this.updateuserName.bind(this, "Rishi")}
                >
                  Update Username{" "}
                </button>{" "}
              </Useroutput>{" "}
              <Useroutput
                username={this.state.output[1].name}
                paragraph="Hey There! Wassup"
              />
              <Userinput changed={this.namechangedHandler} />{" "}
            </Row>{" "}
          </div>
          <div>
            <section className="cards-section">
              <Row>
                <Capabilities
                  imgPath={imgPath}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
                <Capabilities
                  imgPath={imgPath1}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
                <Capabilities
                  imgPath={imgPath2}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
                <div className="space-between"> </div>{" "}
                <Capabilities
                  imgPath={imgPath3}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
                <Capabilities
                  imgPath={imgPath4}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
                <Capabilities
                  imgPath={imgPath5}
                  heading={this.state.updateDetails[0].cardHeading}
                  paragraph={this.state.updateDetails[1].cardParagraph}
                ></Capabilities>{" "}
              </Row>{" "}
            </section>
            <Row>
              <div className="space-between"> </div>{" "}
              <Cards storyHeading="Our Story" />
            </Row>{" "}
            <Story />
            <Mycorner />
          </div>{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default App;
