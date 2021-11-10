import React from "react";
import logo from "../../images/logo.png";
import Button from "../button";
import "./style.css";
import "@fontsource/ibm-plex-sans";

function StickyBanner(props) {
  return (
    <div className="sticky-layout">
      <div className="sticky-component">
        <img src={logo} alt="Coinsquare Logo" />
        <div className="sticky__text">
          <div className="sticky__top-line-text">Quick Trade</div>
          <div className="sticky__bottom-line-text">
            Get it on the App Store
          </div>
        </div>
      </div>
      <div className="sticky__button-layout">
        <Button>GET</Button>
      </div>
    </div>
  );
}
export default StickyBanner;
