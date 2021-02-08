import React, { Component } from "react";
import hamburgerImage from "../images/square.png";
import closeImage from "../images/cancel.png";

class Sidemenu extends Component {
  toggleMenu = () => {
    let selectMenu = document.getElementById("sideMenu");
    selectMenu.style.right = "0";
  };
  cancel = () => {
    let selectMenu = document.getElementById("sideMenu");
    selectMenu.style.right = "-300px";
  };
  render() {
    const sideMenu = {
      width: "30px",
      position: "fixed",
      top: "20px",
      right: "20px",
      zIndex: "2000",
      cursor: "pointer",
    };
    const styleMenu = {
      position: "fixed",
      width: "300px",
      top: 0,
      right: "-300px",
      height: "100%",
      backgroundColor: "#100f10",
      zIndex: "2000",
      transition: "0.3s ease",
    };
    const listWrapper = {
      paddingLeft: "0",
      listStyleType: "none",
      paddingTop: "50px",
    };
    const listItems = {
      color: "#fff",
      paddingBottom: "20px",
      fontSize: "20px",
    };
    return (
      <>
        <img
          src={hamburgerImage}
          onClick={this.toggleMenu}
          alt="menu"
          style={sideMenu}
        />
        <div style={styleMenu} id="sideMenu">
          <img
            src={closeImage}
            alt="close"
            style={{
              width: "25px",
              float: "right",
              margin: "15px 15px 0 0",
              cursor: "pointer",
            }}
            onClick={this.cancel}
          />
          <ul style={listWrapper}>
            <li style={listItems}>Link 1</li>
            <li style={listItems}>Link 2</li>
            <li style={listItems}>Link 3</li>
            <li style={listItems}>Link 4</li>
            <li style={listItems}>Link 5</li>
            <li style={listItems}>Link 6</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidemenu;
