import React from "react";
import "../style/ClubRolling.scss";
import Slider from "react-slick";

const ClubRolling = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slideToScroll: 1,
    arrows: true
  };

  let files = [];
  for (let i = 1; i <= 8; i++) {
    files[i] = `Posters/poster${i}.jpg`;
  }

  files = files.map((file, idx) => (
    <div className="poster" key={idx}>
      <img src={file} alt="poster" />
    </div>
  ));

  return (
    <div className="SliderContainer">
      <Slider {...settings}>{files}</Slider>
    </div>
  );
};

export default ClubRolling;
