import { Anchor, Button, Carousel, Col, Row } from "antd";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import Image from "../../../../Components/Image";
const { Link } = Anchor;

const AppHero = ({ t, i18n = {} }) => {
  const data = [
    {
      ImagePath:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/banner-web.png",
      Title: "here",
      Description: "here1",
    },
    {
      ImagePath:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/Banners-Home/_-_-1.png",
      Title: "here1",
      Description: "here1",
    },
    {
      ImagePath:
        "https://183152-537558-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wysiwyg/Banners-Home/Addrus-banner-for-ptech-website.PNG",
      Title: "here1",
      Description: "here",
    },
  ];
  return (
    <>
      <div className="heroBlock  ">
        <OwlCarousel
          //stageClass={"container owl-stage-outerx"}

          items={1}
          autoplay={true}
          className="owl-theme"
          loop
          margin={20}
          nav
          navText={[
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
          ]}
        >
          {data.map((ele) => (
            <div style={{ maxHeight: "500px" }}>
              <Image src={ele.ImagePath} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default React.memo(AppHero);
