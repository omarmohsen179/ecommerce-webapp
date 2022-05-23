// Layout Types
import DefaultLayout from "./layout";

// Route Views
import Blogs from "../../Views/User/Blogs";
import AddBlog from "../../Views/User/AddBlog";
import Orders from "../../Views/User/Orders";
import Products from "../../Views/User/Products";
import Web from "../../Views/User/Web";
import UsersAdmin from "../../Views/User/UsersAdmin";

import EditProfile from "../../Views/User/EditProfile";
import Home from "../../Views/User/Home";
const layoutPath = "/dashboard";
export default [
  {
    path: layoutPath + "/Home",
    layout: DefaultLayout,
    component: Home,
    key: 0,
    title: "Home",
    htmlBefore: '<i class="fas fa-house-user"></i>',
    exact: true,
    htmlAfter: "",
  },
  {
    path: layoutPath + "/edit-profile",
    layout: DefaultLayout,
    component: EditProfile,
    key: 0,
    title: "edit profile",
    htmlBefore: '<i class="fas fa-pen"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/blogs",
    layout: DefaultLayout,
    component: Blogs,
    key: 1,
    title: "blogs",
    htmlBefore: '<i class="fas fa-blog"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/add-blogs",
    layout: DefaultLayout,
    component: AddBlog,
    key: 1,
    title: "add blog",
    htmlBefore: '<i class="fas fa-folder-plus"></i>',
    htmlAfter: "",
  },

  {
    path: layoutPath + "/orders",
    layout: DefaultLayout,
    key: 2,
    component: Orders,
    title: "order",
    htmlBefore: '<i class="material-icons">note_add</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/products",
    layout: DefaultLayout,
    key: 2,
    component: Products,
    title: "products",
    htmlBefore: '<i class="fab fa-elementor"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/shop",
    layout: DefaultLayout,
    key: 3,
    component: Web,
    title: "shop",
    htmlBefore: '<i class="fas fa-shop"></i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/web",
    layout: DefaultLayout,
    key: 3,
    component: Web,
    title: "web",
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: "",
  },
  {
    path: layoutPath + "/users-admin",
    layout: DefaultLayout,
    key: 4,
    component: UsersAdmin,
    title: "user admin",
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    htmlAfter: "",
  },
];
