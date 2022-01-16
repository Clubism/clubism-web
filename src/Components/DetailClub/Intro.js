import React from "react";
import "../style/DetailClubIntro.scss";
import Carousel from "react-bootstrap/Carousel";

const DetailClubIntro = () => {
  return (
    <div className="IntroContainer">
      <div className="IntroPoster">
        <img
          src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
          style={{ width: "200px", height: "280px" }}
          alt="poster"
        />
      </div>
      <div className="IntroMain">
        <Carousel variant="dark" style={{ height: "280px" }}>
          <Carousel.Item>
            {/* <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "310px" }}
              alt="img1"
            /> */}
            asdf
          </Carousel.Item>
          <Carousel.Item>q마wer</Carousel.Item>
          <Carousel.Item>zxcv</Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default DetailClubIntro;
