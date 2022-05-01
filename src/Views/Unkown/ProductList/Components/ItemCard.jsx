import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

function ItemCard() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  return (
    <div className="col-lg-4 col-md-6 pt-md-4 pt-3">
      <div className="card d-flex flex-column align-items-center">
        <div className="product-name text-center">Footwear For Women</div>
        <div className="card-img">
          {" "}
          <img
            src="https://www.freepnglogos.com/uploads/women-shoes-png/download-women-shoes-png-image-png-image-pngimg-2.png"
            alt=""
          />{" "}
        </div>
        <div className="card-body pt-5">
          <div className="text-muted text-center mt-auto">Available Colors</div>
          <div className="d-flex align-items-center justify-content-center colors my-2">
            <div
              className="btn-group"
              data-toggle="buttons"
              data-tooltip="tooltip"
              data-placement="right"
              title="choose color"
            >
              <label className="btn btn-dark border form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label className="btn btn-brown form-check-label active">
                <input
                  className="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label className="btn btn-pink form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label className="btn btn-red form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center price">
            <div className="font-weight-bold">1500 uah</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
