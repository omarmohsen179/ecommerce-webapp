import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/popper.js/dist/popper";
import Unknown from "./Layout/Unknown";

import { useTranslation } from "react-i18next";
import User from "./Layout/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import routes from "./Layout/User/routes";
import { SetSidebarData, side_menu_data } from "./Store/SidebarReducer";
import DefaultLayout from "./Layout/User/layout";
import Home from "./Views/Unkown/Home";
import AddNewPost from "./Views/User/AddNewPost";
import ProductList from "./Views/Unkown/ProductList";
import Product from "./Views/Unkown/Product";
import Blogs from "./Views/Unkown/Blogs";
import LangueNavBar from "./Components/LangueNavBar";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import ScrollTop from "./Components/ScrollTop";
import Footer2 from "./Components/Footer/index2";
function App() {
  const { t, i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }
  let [Routes, setRoutes] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSidebarData([routes[1], routes[2], routes[3]]));
  }, []);
  let selector = useSelector(side_menu_data);
  useEffect(() => {
    setRoutes(selector);
  }, [selector]);
  let history = useHistory();
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={User} />
        <Route path="/" component={Unknown} />
      </Switch>
    </>
  );
}

export default App;
