import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "./index.css";
import useQuery from "../../../Components/useQuery";

import SideBar from "./Components/SideBar";
import ProductCard from "../../../Components/ProductCard";
import TitleHeader from "../../../Components/TitleHeader";
import { useState } from "react";
import PaginatedItems from "../../../Components/Pagination";
function ProductList() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  let query = useQuery();
  const [queryString, setqueryString] = useState({});
  const [currentItems, setCurrentItems] = useState(null);
  useEffect(() => {
    const querydata = {
      search: query.get("q"),
      category: query.get("c") ? query.get("c") : "",
    };
    setqueryString(querydata);
  }, []);
  const data = [
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/n/i/nintendo_eshop_card_us_.jpg",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/m/i/microsoftteams-image_10_1_.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },

    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
    {
      image:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/catalog/product/cache/7948183ab8341f894cfbbb22f78ef56d/f/i/file_4.png",
      title: "Apple (iTunes ) USA",
      price: 1234,
    },
  ];

  return (
    <div
      className="container product-list"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <TitleHeader
        title={queryString["category"]}
        details={"Item"}
        shaded={"Trendy"}
      />
      <div
        className="bg-white rounded d-flex align-items-center justify-content-between"
        id="header"
      >
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
          <span className="fas fa-filter" id="filter-angle"></span>
          <span style={{ padding: 2, fontWeight: "600" }} id="filter-angle">
            Filter
          </span>
        </a>
      </div>
      <div>
        <div>
          <SideBar />
        </div>

        <div id="products">
          <div className="row mx-0">
            {data.map((ele) => (
              <div className="col-lg-4 col-md-6 col-sm-12 pt-md-4 pt-3">
                <ProductCard ele={ele} />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <PaginatedItems
            itemsPerPage={4}
            data={[]}
            setCurrentItems={setCurrentItems}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
