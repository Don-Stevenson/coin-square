import React from "react";
import logo from "../images/logo.png"

function Sticky(props) {
  return (
    <div className="sticky-component">
      <img src={logo} alt="Coinsquare Logo" />
      <div className="top-line-text">Quick Trade</div>
      <div className="bottom-line-text">Get it on the App Store</div>
      <button className="button">GET</button>
    </div>
  );
}
export default Sticky;
