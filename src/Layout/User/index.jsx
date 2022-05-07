import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetSidebarData, side_menu_data } from "../../Store/SidebarReducer";
import "../../styles/shards-dashboards.1.1.0.css";
import DefaultLayout from "./layout";
export default function User({ match }) {
  let [Routes, setRoutes] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSidebarData([routes[1], routes[2], routes[3]]));
  }, []);
  let selector = useSelector(side_menu_data);
  useEffect(() => {
    setRoutes(selector);
  }, [selector]);

  return (
    <div>
      <DefaultLayout>
        <Switch>
          {Routes?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </DefaultLayout>
    </div>
  );
}
