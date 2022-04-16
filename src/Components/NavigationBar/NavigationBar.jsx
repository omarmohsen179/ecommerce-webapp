import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavigationBar.css";
import logo from "./logomain.png";
import menulogo from "./logomain.png";
import { useLocation, Link, useHistory } from "react-router-dom";
import Collaps from "./Components/collapes";

function NavigationBar() {
  const location = useLocation();
  let history = useHistory();
  let [submenu, setsubmenu] = useState(true);
  let pages = useRef([
    {
      icon: "",
      name: "Home Page",
      route: "/",
      dropdown: [{ name: "WordPress1" }, { name: "WordPress Hosting2" }],
    },
    {
      name: "Hosting",
      route: "/about-us",
      dropdown: [{ name: "WordPress2" }, { name: "WordPress Hosting2" }],
    },
    { name: "Domain", route: "/listinings" },
    { name: "Website & store", route: "/our-team" },
    { name: "Professional Service", route: "/gallery" },
    { name: "Email", route: "/contact-us" },
    { name: "Resources", route: "/contact-us" },
  ]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const openMenu = () => {
    setsubmenu(false);
    document.getElementById("touch").classList.remove("collapsed");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("maincontent").style.right = "250px";
    document.getElementById("maincontent").style.position = "absolute";
    document.getElementById("mySidenav").style.right = "0";
  };
  const closeMenu = () => {
    setsubmenu(true);
    document.getElementById("touch")?.classList.add("collapsed");
    document.getElementById("maincontent").style.right = "0";
    document.getElementById("maincontent").style.position = "";
    document.getElementById("mySidenav").style.width = "0px";
  };
  const navigation = useCallback((e) => {
    closeMenu();
    history.push(e);
  }, []);
  const setDimension = useCallback(() => {
    if (window.innerWidth > 998) {
      closeMenu();
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
  return (
    <nav className={"  container "} id="mynav">
      <div className="  ">
        <div className="row" style={{ padding: "20px 0px" }}>
          <div className="col">
            <div className="main-section-navigation ">
              <div className="Logo-size " style={{ cursor: "pointer" }}>
                <input
                  style={{ display: "none" }}
                  id="check02"
                  type="checkbox"
                  name="menu"
                />
                <Buttontoggler />
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
          <div className="col">
            <div className="hide-web">
              <img
                onClick={() => history.push("/")}
                src={logo}
                width={"200px"}
              />
            </div>
            <form className="search-input hide-mobile">
              <input
                style={{ border: 0, outline: 0, width: "100%", margin: "15px" }}
                placeholder="Search entire store here..."
              ></input>
              <a style={{ margin: "auto 15px", cursor: "pointer" }}>
                <i class="fa-solid fa-magnifying-glass"></i>
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
            <b style={{ padding: "0 5px" }}>
              <Link
                onClick={() => history.push("/log-in")}
                className="text-remove-style"
              >
                LOGIN
              </Link>
            </b>
            |
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignSelf: "center",
              }}
            >
              <a href="#" class="notification">
                <i class=" padding-icons-class fa-solid fa-heart"></i>
                <span class="badge">3</span>
              </a>
              <a href="#" class="notification">
                <i class=" padding-icons-class fa-solid fa-arrows-rotate"></i>
                <span class="badge">3</span>
              </a>
              <a href="#" class="notification">
                <i class=" padding-icons-class fa-solid fa-cart-arrow-down"></i>
                <span class="badge">3</span>
              </a>
            </div>
          </div>
        </div>

        <div></div>

        <div>
          <ul className="Horizontal-list  remove-dot">
            {pages.current.map((ele, index) => (
              <li
                key={index}
                className={
                  getRoutes()?.route == ele?.route
                    ? "active-page allnav"
                    : " allnav"
                }
              >
                <Link className="Horizontal-list-elements " to={ele.route}>
                  <i style={{ padding: "3px" }} class="fa-solid fa-heart"></i>
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
          <div id="mySidenav" className="sidenav">
            <ul className=" remove-dot " style={{ position: "absolute" }}>
              <li>
                <Link className=" ">
                  <img
                    onClick={() => history.push("/")}
                    src={menulogo}
                    width={"190px"}
                  />
                </Link>
              </li>
              {pages.current.map((ele, index) => (
                <li key={index}>
                  <div
                    id={"dropdownmain" + index}
                    className={
                      ele?.dropdown ? "collapsible " : " uncollapsible"
                    }
                    onClick={
                      ele?.dropdown
                        ? () => {
                            document
                              .getElementById("dropdown" + index)
                              .classList.toggle("activecollapsible");
                            document
                              .getElementById("dropdownmain" + index)
                              .classList.toggle("activecollapsible34");
                          }
                        : (e) => navigation(ele.route)
                    }
                  >
                    {ele.name}
                  </div>
                  {ele?.dropdown ? (
                    <div
                      id={"dropdown" + index}
                      className=" collapsiblecontent"
                    >
                      {ele.dropdown.map((ele, indexx) => (
                        <Link key={indexx} className="drop-down-link-side">
                          {ele?.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
