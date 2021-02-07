import React from "react";

const Changeheading = (props) => {
  const input = {
    display: "block",
    textAlign: "left",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #eee",
  };
  return (
    <div>
      <input
        style={input}
        type="text"
        onChange={props.changed}
        placeholder="Update Name"
      />
    </div>
  );
};

export default Changeheading;
