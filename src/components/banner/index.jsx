import React from "react";
import "./index.css";
import img from "./../../images/Frame3.png";
import Toplist from "../Toplist";
const Banner = ({data}) => {
  
  return (
    <div className="banner-component">
      <div className="banner-component-container">
        <div className="banner-component-left-content">
          <div className="banner-component-left-content-main">
            <div className="left-banner">
              <h3>Loui$ Music</h3>
              <h1>Listen to favorite songs with your friends</h1>
              <span>
                With Loui$ music, you can get premium music for free anywhere
                and at any time
              </span>
              <div className="btn exploxe">
                <button>Explore now</button>
              </div>
            </div>
            <div className="right-banner">
              <img src={img} />
            </div>
          </div>
        </div>
        <Toplist data = {data} />
      </div>
    </div>
  );
};

export default Banner;
