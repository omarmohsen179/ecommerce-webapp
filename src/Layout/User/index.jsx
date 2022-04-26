import React from "react";
import { Route,Switch } from "react-router-dom";

import routes from "../../src/routes";
import withTracker from "../../src/withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/shards-dashboards.1.1.0.min.css";

export default function User (){
  return (

    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </Switch>

);
}