import "./App.css";
import ScrollToTop from "./Components/ScrollTop";
import { Link, Route, Switch } from "react-router-dom";

import User from "./Layout/User";
import { Fragment } from "react";
import Unknown from "./Layout/Unknown";

function App() {
  return (
    <div>
      <Route path="/" component={Unknown} />
    </div>
  );
}

export default App;
