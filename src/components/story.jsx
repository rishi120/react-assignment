import React, { useState } from "react"; //// implementing react hooks
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import storyImg from "../images/story.jpg";
import UiTabs from "./materialui-tabs";

const Story = () => {
  const [definePara, setpara] = useState({
    para: [
      {
        content:
          "Hi there, this is Chandan Baruah. A Web Developer(UI/UX) based in Bangalore. I love to learn, explore, travel and expertise in the field of Web Development.",
      },
    ],
  });
  const [key, setKey] = useState("home");

  const storySection = {
    padding: "50px 0 50px 0",
  };

  const wrapper = {
    display: "flex",
  };
  const imgRounded = {
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    border: "5px solid #932a33",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  };

  const alignCenter = {
    display: "flex",
    alignItems: "center",
    // height: "100%",
    fontStyle: "italic",
    paddingTop: "30px",
  };
  return (
    <section style={storySection}>
      <Row>
        <Col md={4}>
          <div style={wrapper}>
            <img src={storyImg} alt="my-story" style={imgRounded} />
          </div>
        </Col>
        <Col md={8}>
          <h1
            style={{
              textAlign: "left",
              borderBottom: "1px solid #dedede",
              paddingBottom: "10px",
            }}
          >
            About
          </h1>
          <p style={alignCenter}>{definePara.para[0].content}</p>
          <UiTabs />
        </Col>
      </Row>
    </section>
  );
};
export default Story;
