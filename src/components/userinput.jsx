import React from "react";
import Col from "react-bootstrap/Col";
// ES6 function syntax

const Userinput = (props) => {
  return (
    <Col md={4}>
      <div className="userinput">
        <input
          type="text"
          placeholder="Update Username"
          onChange={props.changed}
          //   value={props.username}
        />{" "}
      </div>{" "}
    </Col>
  );
};
export default Userinput;
