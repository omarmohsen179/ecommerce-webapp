import React from "react";
import ButtonComponent from "../ButtonComponent";
import NavigationBar from "../NavigationBar/NavigationBar";
import img from "../../Assets/Homebackground.webp";
import "./Upper.css";
function Upper({ BackgroundImage }) {
  return (
    <div className="upper-main-container">
      <div className="row center-content-upper-main container">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="Upper-container ">
            <h2 class="small-heading">Shared Hosting</h2>
            <h2 class="large-heading">Web hosting done right.</h2>
            <ButtonComponent Text={"Host Your Site"} />
            <div class="price">
              <strong>
                <span class="starting-price">
                  <p>Starting at</p>
                  <span class="currency-symbol">$</span>2.95
                  <span class="term-text">/mo*</span>
                </span>
              </strong>
            </div>
            <div>
              <ul style={{ lineHeight: "80%" }}>
                <li>
                  <p>Drag-and-Drop WordPress Builder</p>
                </li>
                <li>
                  <p>300+ Design Templates</p>
                </li>
                <li>
                  <p>Total WordPress Design Freedom</p>
                </li>
                <li>
                  <p>Domain for 1st Year</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4 center-img-conponent">
          <div className="Upper-container parent" style={{ margin: "auto" }}>
            <img src={img} className="child" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3  col-sm-12">
          <div className="Upper-container ">
            <h2 class="small-heading">Shared Hosting</h2>
            <h2 class="large-heading">Web hosting done right.</h2>
            <ButtonComponent Text={"Host Your Site"} />
            <div className="Upper-title">
              RealTors
              <p className="Upper-details">
                Contact our Home Realtors team today to find the home of your
                dreams.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 center-img-conponent-buttom">
          <div className="Upper-container parent" style={{ margin: "auto" }}>
            <img src={img} className="child" />
          </div>
        </div>
        {/*<div className="col-12">
      <div className="Text-container-Upper">
        <div className="Upper-title">
          RealTors
          <p className="Upper-details">
            Contact our Home Realtors team today to find the home of your
            dreams.
          </p>
        </div>
      </div>
    </div>*/}
      </div>
    </div>
  );
}

export default Upper;
