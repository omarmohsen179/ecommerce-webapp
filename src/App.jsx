import { Route } from "react-router-dom";
import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Unknown from "./Layout/Unknown";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }
  return (
    <div>
      <Route path="/" component={Unknown} />
    </div>
  );
}

export default App;
