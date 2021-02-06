import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import mask1 from "../images/mask-1.jpg";

class Mycorner extends Component {
  state = {
    firstPart: "Success",
    secondPart: "Story",
    secPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    secPara1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    showHeading: true,
  };

  render() {
    const addSpacing = {
      paddingLeft: "10px",
      color: "#932a33",
    };
    let Headingname = null;
    if (this.state.showHeading) {
      Headingname = (
        <h1 style={{ paddingBottom: "50px" }}>
          {this.state.firstPart}
          <span style={addSpacing}>{this.state.secondPart}</span>
        </h1>
      );
    }
    return (
      <>
        <section style={{ padding: "50px 0" }}>
          {Headingname}
          <Row>
            <Col md={4}>
              <div>
                <p style={{ textAlign: "justify", wordSpacing: "-1px" }}>
                  {this.state.secPara}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <img src={mask1} className="img-fluid" />
            </Col>
            <Col md={4}>
              <div>
                <p style={{ textAlign: "justify", wordSpacing: "-1px" }}>
                  {this.state.secPara1}
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </>
    );
  }
}

export default Mycorner;
