import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Unknown from "./Layout/Unknown";

import { useTranslation } from "react-i18next";
import User from "./Layout/User";

function App() {
  const { i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }

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
