import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layout";

// Route Views
import BlogOverview from "../../Views/User/BlogOverview";
import UserProfileLite from "../../Views/User/UserProfileLite";
import AddNewPost from "../../Views/User/AddNewPost";
import Errors from "../../Views/User/Errors";
import ComponentsOverview from "../../Views/User/ComponentsOverview";
import BlogPosts from "../../Views/User/BlogPosts";
const layoutPath = "/dashboard";
export default [
  {
    path: layoutPath + "/",
    exact: true,
    layout: DefaultLayout,
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: "",

    component: () => <Redirect to={layoutPath + "/blog-overview"} />,
  },
  {
    path: layoutPath + "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview,
    title: "blog overview",
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/user-profile-lite",
    layout: DefaultLayout,
    title: "Edit profile",
    component: UserProfileLite,
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost,

    title: "Add New Post",
    htmlBefore: '<i class="material-icons">note_add</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/errors",
    layout: DefaultLayout,
    component: Errors,
    htmlBefore: '<i className="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
    htmlBefore: '<i className="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/blog-posts",
    layout: DefaultLayout,
    title: "Blog Posts",
    component: BlogPosts,
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    htmlAfter: "",
  },
];
