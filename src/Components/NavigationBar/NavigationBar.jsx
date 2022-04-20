import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "./logomain.png";

import { useLocation, Link, useHistory } from "react-router-dom";
import SideMenu from "./Components/SideMenu";
import card from "../../Assets/card.png";
import { useTranslation } from "react-i18next";
function NavigationBar() {
  const location = useLocation();
  let history = useHistory();
  let [submenu, setsubmenu] = useState(true);
  let pages = useRef([
    {
      icon: "fas fa-house-chimney",
      name: "Home Page",
      route: "/",
    },
    {
      icon: "fab fa-audible",
      name: "Local card",
      route: "/about-us",
      dropdown: [{ name: "WordPress2" }, { name: "WordPress Hosting2" }],
    },
    {
      icon: "fab fa-atlassian",
      name: "International ",
      route: "/listinings",
      dropdown: [{ name: "WordPress1" }, { name: "WordPress Hosting2" }],
    },
    { icon: "fas fa-gamepad", name: "Website & store", route: "/our-team" },
    { icon: "fas fa-address-card", name: "About", route: "/gallery" },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [list, setlist] = useState([
    {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 400,
    },

    {
      name: "steam card (UAS)",
      ImagePath: card,
      price: 1221,
    },
  ]);
  const [values, setvalues] = useState({});
  const handleChange = useCallback((e) => {
    console.log({ [e.target.name]: e.target.value });
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const openMenu = () => {
    setsubmenu(false);
    document.getElementById("touch").classList.remove("collapsed");
    document.getElementById("mySidenav").style.width = "80%";
  };
  const closeMenu = () => {
    setsubmenu(true);
    document.getElementById("touch")?.classList.add("collapsed");
    document.getElementById("mySidenav").style.width = "0";
  };
  const navigation = useCallback((e) => {
    closeMenu();
    history.push(e);
  }, []);
  const setDimension = useCallback(() => {
    if (window.innerWidth > 998) {
      closeMenu();
      document.getElementsByClassName(
        "search-input-mobile-view"
      )[0].style.display = "none";
    }
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  }, [window]);
  const getRoutes = useCallback(() => {
    return pages.current.filter((ele) => location.pathname == ele.route)[0];
  }, [location.pathname]);
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const Buttontoggler = () => {
    return (
      <div
        className="collabse-button"
        onClick={() => (submenu ? openMenu() : closeMenu())}
      >
        <button
          className={"navbar-toggler " + (submenu ? "collapsed" : "")}
          type="button"
          id="touch"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "transparent", cursor: "pointer " }}
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
      </div>
    );
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language === "en") {
      document.getElementById("mySidenav").classList.add("direction-left");
      document.getElementById("mySidenav").classList.remove("direction-right");
      var xx = document.querySelectorAll(".collapsible");
    } else {
      document.getElementById("mySidenav").classList.remove("direction-left");
      document.getElementById("mySidenav").classList.add("direction-right");
    }
  }, [i18n.language]);
  return (
    <nav
      id="mynav"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <div className="row nav-up-container" id={"nav-up-container-id"}>
        <div className="col" style={{ alignSelf: "center" }}>
          <div className="search-input-mobile-view">
            <a
              className=" text-color-hover close-search-input "
              onClick={() =>
                (document.getElementsByClassName(
                  "search-input-mobile-view"
                )[0].style.display = "none")
              }
            >
              &times;
            </a>
            <form
              className="search-input"
              style={{ backgroundColor: "white", margin: "auto" }}
            >
              <input
                className="search-input-element"
                placeholder="Search here..."
                required
                name="searchinput"
                onChange={handleChange}
                value={values.searchinput}
              ></input>
              <a style={{ margin: "auto 15px", cursor: "pointer" }}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </form>
            <div
              style={{
                margin: " 5% 0",
                border: "1px solid black",
                backgroundColor: "white",
              }}
            >
              {list.map((ele) => (
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img style={{ margin: "auto" }} src={ele.ImagePath} />
                  </div>
                  <div>
                    <p>{ele.name} </p>
                    <div>{ele.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="main-section-navigation ">
            <div className="Logo-size " style={{ cursor: "pointer" }}>
              <div className="hide-web">
                <input
                  style={{ display: "none" }}
                  id="check02"
                  type="checkbox"
                  name="menu"
                />
                <Buttontoggler />
                <i
                  style={{ fontSize: "20px", margin: " auto 15px" }}
                  class="fa-solid fa-magnifying-glass"
                  onClick={() =>
                    (document.getElementsByClassName(
                      "search-input-mobile-view"
                    )[0].style.display = "block")
                  }
                ></i>
              </div>

              <div className="hide-mobile ">
                <img
                  onClick={() => history.push("/")}
                  src={logo}
                  width={"200px"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{ alignItems: "center" }}>
          <div className="hide-web" style={{ justifyContent: "center" }}>
            <img onClick={() => history.push("/")} src={logo} width={"200px"} />
          </div>
          <form className="search-input hide-mobile">
            <input
              className="search-input-element"
              placeholder="Search here..."
              name="searchinput"
              onChange={handleChange}
              value={values.searchinput}
            ></input>
            <a style={{ margin: "auto 15px", cursor: "pointer" }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </form>
        </div>
        <div
          className="col"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <b className="hide-mobile">
            <Link
              onClick={() => history.push("/log-in")}
              className="text-remove-style  text-color-hover"
              style={{ padding: "0 5px" }}
            >
              LOGIN
            </Link>
            |
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignSelf: "center",
            }}
          >
            <a href="#" class="notification">
              <i class=" padding-icons-class  text-color-hover fa-solid fa-heart"></i>
              <span class="badge">3</span>
            </a>
            <a href="#" class="notification">
              <i class=" padding-icons-class  text-color-hover fa-solid fa-arrows-rotate"></i>
              <span class="badge">3</span>
            </a>
            <a href="#" class="notification">
              <i class=" padding-icons-class  text-color-hover fa-solid fa-cart-arrow-down"></i>
              <span class="badge">3</span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <ul
          style={{ float: i18n.language === "en" ? "left" : "right" }}
          className="Horizontal-list  remove-dot"
        >
          {pages.current.map((ele, index) => (
            <li
              key={index}
              className={
                getRoutes()?.route == ele?.route
                  ? "active-page allnav"
                  : " allnav"
              }
            >
              <Link
                className="Horizontal-list-elements text-color-hover"
                to={ele.route}
                style={{ margin: index != 0 ? "0 5px" : "0" }}
              >
                <i style={{ padding: "3px" }} className={ele.icon}></i>
                {ele.name}
              </Link>

              {ele?.dropdown ? (
                <div className="dropdown-content">
                  {ele.dropdown.map((ele, indexx) => (
                    <Link key={indexx} className="drop-down-link">
                      {ele?.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
        <SideMenu
          pages={pages}
          navigation={navigation}
          submenu={submenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
      </div>
    </nav>
  );
}

export default NavigationBar;
