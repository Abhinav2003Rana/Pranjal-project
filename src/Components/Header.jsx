import React from "react";
import logo from "../assets/logo.png";
import HeaderContent from "../assets/HeaderContent.png"

export const Header = () => {
  return (
    <div className="header">
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Contact Us</p>
        </div>
        <div className="contact">
          <p>Contact Us</p>
        </div>
      </nav>

      <div className="H-content">
        <img src={HeaderContent} alt="" />
      </div>
    </div>
  );
};
