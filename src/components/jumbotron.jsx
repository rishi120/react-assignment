import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React, { Component } from "react";
import Changeheading from "./changetext";
/* gsap imports */
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class Maincontent extends Component {
  state = {
    update: [{ name: "Hello World!" }],
    updateName: true,
  };
  toggleHeading = () => {
    this.setState({
      update: [{ name: "Jumbotron" }],
    });
  };
  changeText = (nameChanged) => {
    this.setState({
      update: [{ name: nameChanged.target.value }],
    });
  };

  render() {
    let Newupdate = false;
    if (this.state.updateName) {
      Newupdate = (
        <div>
          <h1 className="display-3">{this.state.update[0].name}</h1>
        </div>
      );
    }
    return (
      <div>
        <Jumbotron className="custom-jumbotron">
          <Container>
            {Newupdate}
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p className="lead">
              <Button variant="primary" onClick={this.toggleHeading}>
                Update Heading
              </Button>
            </p>
            <Changeheading changed={this.changeText}></Changeheading>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Maincontent;
