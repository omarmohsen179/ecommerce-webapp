import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
const layoutPath="/u"
export default [
  {
    path: layoutPath+"/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to={layoutPath+"/blog-overview"} />
  },
  {
    path: layoutPath+"/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: layoutPath+"/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: layoutPath+"/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: layoutPath+"/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: layoutPath+"/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path:layoutPath+ "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: layoutPath+"/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
