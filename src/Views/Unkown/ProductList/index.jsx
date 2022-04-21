import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "./index.css";
import useQuery from "../../../Components/useQuery";
import { useRef } from "react";
import ItemCard from "./Components/ItemCard";
import SideBar from "./Components/SideBar";
function ProductList() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  let query = useQuery();
  useEffect(() => {
    const querydata = {
      search: query.get("q"),
      category: query.get("c") ? query.get("c") : "",
    };
    console.log(querydata);
  }, []);
  var count = useRef(0),
    count2 = useRef(0);
  function changeBtnTxt() {
    console.log("here");
    var filterBtn = document.getElementById("filter-btn");
    var btnTxt = document.getElementById("btn-txt");
    var filterAngle = document.getElementById("filter-angle");
    count++;
    if (count % 2 != 0) {
      filterAngle.classList.add("fa-angle-right");
      btnTxt.innerText = "show filters";
      filterBtn.style.backgroundColor = "#36a31b";
    } else {
      filterAngle.classList.remove("fa-angle-right");
      btnTxt.innerText = "hide filters";
      filterBtn.style.backgroundColor = "#ff935d";
    }
  }
  const data = [
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
    {
      title: "Torn Jeans for Men",
      image:
        "https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png",
    },
  ];
  return (
    <div class="container">
      <div
        class="bg-white rounded d-flex align-items-center justify-content-between"
        id="header"
      >
        {" "}
        <a
          className="text-color-hover"
          data-bs-toggle="collapse"
          href="#filterbar"
          role="button"
          aria-expanded="false"
          aria-controls="filterbar"
          id="filter-btn"
          style={{ color: "black" }}
        >
          <span class="fas fa-filter" id="filter-angle"></span>
        </a>
        <div class="ml-auto mt-3 mr-2">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                {" "}
                <a class="page-link" href="#" aria-label="Previous">
                  {" "}
                  <span aria-hidden="true" class="font-weight-bold">
                    &lt;
                  </span>{" "}
                  <span class="sr-only">Previous</span>{" "}
                </a>{" "}
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  ..
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  24
                </a>
              </li>
              <li class="page-item">
                {" "}
                <a class="page-link" href="#" aria-label="Next">
                  {" "}
                  <span aria-hidden="true" class="font-weight-bold">
                    &gt;
                  </span>{" "}
                  <span class="sr-only">Next</span>{" "}
                </a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="content" class="my-5">
        <SideBar />
        <div id="products">
          <div class="row mx-0">
            {data.map(() => (
              <ItemCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
