import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

function Product() {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  return (
    <div class="col-lg-4 col-md-6 pt-md-4 pt-3">
      <div class="card d-flex flex-column align-items-center">
        <div class="product-name text-center">Footwear For Women</div>
        <div class="card-img">
          {" "}
          <img
            src="https://www.freepnglogos.com/uploads/women-shoes-png/download-women-shoes-png-image-png-image-pngimg-2.png"
            alt=""
          />{" "}
        </div>
        <div class="card-body pt-5">
          <div class="text-muted text-center mt-auto">Available Colors</div>
          <div class="d-flex align-items-center justify-content-center colors my-2">
            <div
              class="btn-group"
              data-toggle="buttons"
              data-tooltip="tooltip"
              data-placement="right"
              title="choose color"
            >
              <label class="btn btn-dark border form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label class="btn btn-brown form-check-label active">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label class="btn btn-pink form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
              <label class="btn btn-red form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center price">
            <div class="font-weight-bold">1500 uah</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
