import React from "react";
import "../style/DetailClubIntro.scss";
import Carousel from "react-bootstrap/Carousel";

const DetailClubIntro = () => {
  return (
    <div className="IntroContainer">
      <div className="IntroPoster">
        <img src="" alt="poster" />
      </div>
      <div className="IntroMain">
        <Carousel variant="dark" style={{ height: "280px" }}>
          <Carousel.Item>asdf</Carousel.Item>
          <Carousel.Item>qwer</Carousel.Item>
          <Carousel.Item>zxcv</Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default DetailClubIntro;
