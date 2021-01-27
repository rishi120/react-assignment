import React, { useState } from "react"; //// implementing react hooks
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import imgSrc from "../images/usa.jpg";

const Cards = (props) => {
  /* inline css */
  const storyHeading = {
    textAlign: "center",
    fontSize: "40px",
    letterSpacing: "2px",
    borderBottom: "1px solid #dedede",
    paddingBottom: "5px",
    color: "#932a33",
    fontWeight: "600",
    marginBottom: "50px",
  };
  const buttonStyle = {
    display: "flex",
    padding: "15px",
    border: "none",
    backgroundColor: "rgb(147, 42, 51)",
    color: "white",
    borderRadius: "5px",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
  };
  const paraStyle = {
    textAlign: "justify",
  };
  const imgStyle = {
    width: "100%",
    height: "370px",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
  };
  /* inline css ends */

  const [paragraphState, setParagraph] = useState({
    para: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  });

  const updateuserName = () => {
    setParagraph({
      para: [
        {
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ],
    });
  };

  return (
    <div className="wrap-around">
      <h1 style={storyHeading}>{props.storyHeading}</h1>
      <div className="row">
        <Col md={8}>
          <div className="content-wrapper">
            <p style={paraStyle}>{paragraphState.para[0].content}</p>
            <button type="button" style={buttonStyle} onClick={updateuserName}>
              Update Paragraph
            </button>
          </div>
        </Col>
        <Col md={4}>
          <div className="card-img">
            <img
              src={imgSrc}
              alt="usa"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Cards;
