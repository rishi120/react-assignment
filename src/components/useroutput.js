import React from "react";
import Col from "react-bootstrap/Col";
// import Userinput from "./userinput";
// ES6 function syntax

const Useroutput = (props) => {
  return (
    <Col md={4}>
      <div className="cards">
        <h1>{props.username}</h1>
        <p>{props.paragraph}</p>
        <div>{props.children}</div>
      </div>
    </Col>
  );
};

export default Useroutput;
