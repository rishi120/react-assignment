import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import mask1 from "../images/mask-1.jpg";
import project1 from "../images/projects/dogbox.png";
import project2 from "../images/projects/svg-animation.png";
import project3 from "../images/projects/syngene.png";
import project4 from "../images/projects/blackswan.png";
import newImage from "../images/t4g.png";
import aboutImg from "../images/about-pic-2.png";
import Button from "react-bootstrap/Button";
import Menu from "../images/more.png";
import gallery from "../images/logos/gallery.png";
import camera from "../images/logos/photo.png";
import document from "../images/logos/documents.png";
import contact from "../images/logos/phone.png";

class Mycorner extends Component {
  state = {
    firstPart: "Success",
    secondPart: "Story",
    secPara:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    secPara1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    showHeading: true,
    renderImage: true,
    renderContent: [
      {
        renderHeading: "About Us",
      },
      {
        renderParagraph:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.empore sequi, necessitatibus culpa in animi harum, veniam odit a quod eveniet nulla temporibus dolorem ad dolores similique? Aspernatur, fugit voluptatem.",
      },
    ],
    renderList: false,
  };

  paraChange = () => {
    this.setState({
      renderContent: [
        {
          renderHeading: "About Us",
        },
        {
          renderParagraph:
            "A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.",
        },
      ],
    });
  };

  toggle = () => {
    const showList = this.state.renderList;
    this.setState({
      renderList: !showList,
    });
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
    let lists = null;
    if (this.state.renderList) {
      lists = (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              transition: "0.3s ease",
            }}
          >
            <li style={{ paddingBottom: "15px", paddingTop: "15px" }}>
              <img
                src={gallery}
                style={{
                  width: "50px",
                }}
                alt="gallery"
              />
            </li>
            <li style={{ paddingBottom: "15px" }}>
              <img
                src={document}
                style={{
                  width: "50px",
                }}
                alt="document"
              />
            </li>
            <li style={{ paddingBottom: "15px" }}>
              <img
                src={camera}
                style={{
                  width: "50px",
                }}
                alt="camera"
              />
            </li>
            <li style={{ paddingBottom: "15px" }}>
              <img
                src={contact}
                style={{
                  width: "50px",
                }}
                alt="contact"
              />
            </li>
          </ul>
        </div>
      );
    }
    // let imageList = ["image1", "image2", "image3", "image4"];
    // for (var i = 0; i <= imageList.length; i++) {
    //   var result = imageList[i];
    //   console.log(result);
    // }
    // let groupImages = imageList.map(function (item, index, array) {
    //   return item;
    // });
    // console.log(groupImages);
    let image1,
      image2,
      image3,
      image4 = null;
    if (this.state.renderImage) {
      image1 = <img src={project1} className="img-fluid trans-effect" />;
      image2 = <img src={project2} className="img-fluid trans-effect" />;
      image3 = <img src={project3} className="img-fluid trans-effect" />;
      image4 = <img src={project4} className="img-fluid trans-effect" />;
    }
    return (
      <>
        <section style={{ padding: "50px 0" }}>
          {Headingname}
          <Row>
            <Col md={4}>
              <div>
                <p
                  style={{
                    textAlign: "justify",
                    wordSpacing: "-1px",
                    fontSize: "16px",
                    lineHeight: "25px",
                  }}
                >
                  {this.state.secPara}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <img src={mask1} className="img-fluid" />
            </Col>
            <Col md={4}>
              <div>
                <p
                  style={{
                    textAlign: "justify",
                    wordSpacing: "-1px",
                    fontSize: "16px",
                    lineHeight: "25px",
                  }}
                >
                  {this.state.secPara1}
                </p>
              </div>
            </Col>
          </Row>
          <div className="more-content">
            <Row>
              <Col md={6}>
                <h1
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid #dedede",
                    color: "#932a33",
                  }}
                >
                  Portfolio
                </h1>
                <p style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate placeat officiis voluptatum ex consequatur quisquam
                  quos accusantium autem rerum ab, quae fuga delectus at odit
                  itaque nihil molestiae soluta nostrum!
                </p>
              </Col>
              <Col md={6}>
                <div className="img-wrapper">
                  <Row className="no-gutters">
                    <Col md={6}>{image1}</Col>
                    <Col md={6}>{image2}</Col>
                    <Col md={6}>{image3}</Col>
                    <Col md={6}>{image4}</Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div style={{ padding: "50px", width: "100%" }}></div>
            <Row>
              <Col md={6}>
                <img src={aboutImg} className="img-fluid" />
              </Col>
              <Col md={6}>
                <div>
                  <h1
                    style={{
                      textAlign: "right",
                      borderBottom: "1px solid #dedede",
                      color: "#932a33",
                    }}
                  >
                    {this.state.renderContent[0].renderHeading}
                  </h1>
                  <p style={{ textAlign: "right" }}>
                    {this.state.renderContent[1].renderParagraph}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingBottom: "10px",
                    }}
                  >
                    <Button onClick={this.paraChange}>Update Paragraph</Button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img
                      src={Menu}
                      onClick={this.toggle}
                      style={{ width: "25px", cursor: "pointer" }}
                    />
                  </div>
                  {lists}
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
  }
}

export default Mycorner;
