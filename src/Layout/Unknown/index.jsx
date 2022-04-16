import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import { Route, Redirect, Link } from "react-router-dom";
import Home from "../../Views/Unkown/Home";

import LangueNavBar from "../../Components/LangueNavBar";
import Login from "../../Views/Unkown/Login";

const Loginz = () => (
  <div>
    <h2>login </h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);
function Unknown() {
  //<FixedIcons />
  return (
    <div>
      <LangueNavBar />
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/log-in" component={Login} />
      <Route path={"/not-found"} component={() => <h1>Not Found</h1>} />
      <Redirect to="/" />
    </div>
  );
}

export default Unknown;
