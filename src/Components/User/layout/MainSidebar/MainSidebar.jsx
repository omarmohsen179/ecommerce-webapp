import React, { useEffect } from "react";

import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItems from "./SidebarNavItems";
import { Store } from "../flux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { side_menu_status } from "../../../../Store/SidebarReducer";
const MainSidebar = () => {
  const [menuVisible, setmenuVisible] = useState(false);
  let selector = useSelector(side_menu_status);
  useEffect(() => {
    setmenuVisible(selector);
  }, [selector]);
  return (
    <Col
      tag="aside"
      className={classNames(
        "main-sidebar ",
        "px-0 ",
        "col-12 ",
        menuVisible && "open"
      )}
      lg={{ size: 2 }}
      md={{ size: 3 }}
    >
      <SidebarMainNavbar />
      <SidebarNavItems />
    </Col>
  );
};

export default MainSidebar;
