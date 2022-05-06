import React, { useCallback, useRef, useState } from "react";
import "./Footer2.css";
import "./Footer.css";
import back from "../../Assets/footer.jpg";
import { text } from "../../styles/constant";
function Footer2() {
  let pages = useRef([
    { name: "Home", route: "/" },
    { name: "About us", route: "/about-us" },
    { name: "Listinings", route: "/listinings" },
    { name: "Our Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact Us", route: "/contact-us" },
  ]);
  let social = useRef([
    { type: "facebook" },
    { type: "twitter" },
    { type: "linkedin-in" },
    { type: "instagram" },
  ]);

  const [values, setvalues] = useState({});
  const handleChange = useCallback((e) => {
    console.log({ [e.target.name]: e.target.value });
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  return (
    <div
      style={{ backgroundImage: "url(" + back + ")", zIndex: "1", color: text }}
      className="footer-container worksBlock"
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          BE THE FIRST TO KNOW
        </h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
      </div>
      <div className="email-sub-form-container">
        <form
          className="search-input"
          style={{ backgroundColor: "white", margin: "5px" }}
        >
          <input
            className="search-input-element"
            placeholder="EMAIL ADDRESS"
            required
            name="searchinput"
            onChange={handleChange}
            value={values.searchinput}
          ></input>
        </form>

        <button className="sub-button">Subscribe </button>
      </div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-9999878398{" "}
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@example.com{" "}
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Image Rectoucing</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Clipping Path</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Ebay & Amazon</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul className="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Remove Background</a>
                </li>
                <li>
                  <a href="http://webenlance.com">
                    Shadows & Mirror Reflection
                  </a>
                </li>
                <li>
                  <a href="http://webenlance.com">Logo Design</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Vectorization</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <a href="http://webenlance.com">Home</a>
            </li>
            <li>
              <a href="http://webenlance.com">About</a>
            </li>
            <li>
              <a href="http://webenlance.com">Services</a>
            </li>
            <li>
              <a href="http://webenlance.com">Pricing</a>
            </li>
            <li>
              <a href="http://webenlance.com">Blog</a>
            </li>
            <li>
              <a href="http://webenlance.com">Contact</a>
            </li>
          </ul>
          <p className="text-center">
            Copyright @2017 | Designed With by <a href="#">Your Company Name</a>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
