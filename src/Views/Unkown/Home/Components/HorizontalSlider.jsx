import React from "react";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../../../Components/ProductCard";

function HorizontalSlider() {
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
  const { t, i18n } = useTranslation();
  return (
    <div className="hor-slide" style={{ marginTop: "20px" }}>
      <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
        <h3 className="section-title">
          <span>Collection</span>
        </h3>
      </div>

      <OwlCarousel
        //stageClass={"container owl-stage-outerx"}
        res
        items={5}
        autoplay={true}
        className="owl-theme"
        loop
        margin={20}
        nav
        navText={[
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>",
        ]}
        responsiveClass={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        }}
      >
        {data.map((ele) => (
          <ProductCard ele={ele} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default HorizontalSlider;
