import React from "react";
import logo from "../images/logo.png"

function Sticky(props) {
  return (
    <div className="sticky-component">
      <div className="top-line-text">Quick Trade</div>
      <div className="bottom-line-text">Get it on the App Store</div>
      <img src={logo} alt="Coinsquare Logo" />
      <button className="button">Get</button>
    </div>
  );
}
export default Sticky;
