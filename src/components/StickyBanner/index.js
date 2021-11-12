import React from "react";
import logo from "../../images/logo.png";
import Button from "../Button";
import "./style.css";
import "@fontsource/ibm-plex-sans";

// create a sticky banner to specs given using display flex and a series of divs
function StickyBanner() {
  return (
    <div className="sticky-layout">
      <div className="sticky-component">
        <img src={logo} alt="Coinsquare Logo" />
        <div className="sticky__text">
          <div className="sticky__top-line-text">Quick&nbsp;Trade</div>
          <div className="sticky__bottom-line-text">
            Get&nbsp;it&nbsp;on&nbsp;the&nbsp;App&nbsp;Store
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
