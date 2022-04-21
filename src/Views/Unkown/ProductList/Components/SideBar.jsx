import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

function SideBar() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const data1 = [
    {
      name: "Windbreaker",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Windbreaker",
    },
    {
      name: "Coat",
    },
  ];
  const data2 = [
    {
      name: "Summer",
    },
    {
      name: "Autumn",
    },
    {
      name: "Jumpsuit",
    },
    {
      name: "Windbreaker",
    },
    {
      name: "Coat",
    },
  ];
  return (
    <div id="filterbar" className="collapse">
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          Sort By
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#sort-by"
            aria-expanded="false"
            aria-controls="sort-by"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="sort-by" className="collapse mt-2 mr-1">
          {data1.map((ele) => (
            <div className="my-1">
              {" "}
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />{" "}
                <span className="check"></span>{" "}
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          Outerwear
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#inner-box"
            aria-expanded="false"
            aria-controls="inner-box"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="inner-box" className="collapse mt-2 mr-1">
          {data1.map((ele) => (
            <div className="my-1">
              {" "}
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />{" "}
                <span className="check"></span>{" "}
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          season{" "}
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#inner-box2"
            aria-expanded="false"
            aria-controls="inner-box2"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="inner-box2" className="collapse mt-2 mr-1">
          {data2.map((ele) => (
            <div className="my-1">
              {" "}
              <label className="tick">
                {ele.name} <input type="checkbox" checked="checked" />{" "}
                <span className="check"></span>{" "}
              </label>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="box border-bottom">
        <div className="box-label text-uppercase d-flex align-items-center">
          price
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#price"
            aria-expanded="false"
            aria-controls="price"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div className="collapse" id="price">
          <div className="middle">
            <div className="multi-range-slider">
              <input
                type="range"
                id="input-left"
                min="100"
                max="1000"
                value="120"
              />
              <input
                type="range"
                id="input-right"
                min="0"
                max="100"
                value="150"
              />
              <div className="slider">
                <div className="track"></div>
                <div className="range"></div>
                <div className="thumb left"></div>
                <div className="thumb right"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <div>
              <span id="amount-left" className="font-weight-bold"></span> 10
            </div>
            <div>
              <span id="amount-right" className="font-weight-bold"></span> 10000
            </div>
          </div>
          <label for="customRange1" class="form-label">
            Example range
          </label>
          <input type="range" class="form-range" id="customRange1" />
        </div>
      </div>
      <div className="box">
        <div className="box-label text-uppercase d-flex align-items-center">
          size
          <button
            className="btn ml-auto"
            type="button"
            data-bs-toggle="collapse"
            href="#size"
            aria-expanded="false"
            aria-controls="size"
          >
            <span className="fas fa-plus"></span>
          </button>
        </div>
        <div id="size" className="collapse">
          <div
            className="btn-group d-flex align-items-center flex-wrap"
            data-toggle="buttons"
          >
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" /> 80{" "}
            </label>
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" checked /> 92
            </label>
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" checked /> 103
            </label>
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" checked /> 104
            </label>
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" checked /> 106
            </label>
            <label className="btn btn-success form-check-label">
              <input className="form-check-input" type="checkbox" checked /> 108
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
