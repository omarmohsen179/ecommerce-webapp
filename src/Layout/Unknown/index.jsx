import { useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../Views/Unkown/Home";

import Footer from "../../Components/Footer/index2";
import LangueNavBar from "../../Components/LangueNavBar";
import ScrollTop from "../../Components/ScrollTop";
import CreateAccount from "../../Views/Unkown/CreateAccount";
import ForgetPassword from "../../Views/Unkown/ForgetPassword";
import Login from "../../Views/Unkown/Login";
import ResetPassword from "../../Views/Unkown/ResetPassword";
import ProductList from "../../Views/Unkown/ProductList";
import Product from "../../Views/Unkown/Product";

function Unknown() {
  useEffect(() => (window.onscroll = onScroll), []);
  const onScroll = () => {
    var navbar = document.getElementById("navbar");
    var navbarin = document.getElementById("nav-up-container-id");
    var mybutton = document.getElementById("return-top-button");
    var content = document.getElementsByClassName("dropdown-content");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky + 50) {
      navbar.classList.add("sticky");
      for (var i = 0; i < content.length; i++) {
        content[i].classList.add("down-nav");
      }
      mybutton.style.display = "block";
      navbarin.classList.remove("nav-up-container");
    } else {
      navbar.classList.remove("sticky");
      mybutton.style.display = "none";
      for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("down-nav");
      }
      navbarin.classList.add("nav-up-container");
    }
  };
  // <Redirect to="/" />
  return (
    <div>
      <ScrollTop />
      <div className="header">
        <LangueNavBar />
      </div>
      <div id="navbar">
        <NavigationBar />
      </div>
      <div className="main_body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/log-in" component={Login} />
          <Route path="/forget-password" component={ForgetPassword} />

          <Route path="/list" component={ProductList} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/item" component={Product} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path={"/not-found"} component={() => <h1>Not Found</h1>} />
          <Redirect to={"/"} />
        </Switch>
      </div>
      <button
        onClick={() => window.scrollTo(0, 0)}
        id="return-top-button"
        title="Go to top"
      >
        <i className="fas fa-angle-up"></i>
      </button>
      <Footer />
    </div>
  );
}

export default Unknown;
