import React, { useState } from "react";
import "../style/DetailClubIntro.scss";
import Carousel from "react-bootstrap/Carousel";

const DetailClubIntro = (props) => {
  const [selectedClub, setSelectedClub] = useState([]);
  console.log(props);
  var url;

  if (props.status === 1) {
    url = "../../dummy/mainclubrecruitlist.json";
  } else if (props.status === 2) {
    url = "../../dummy/subclubrecruitlist.json";
  }
  return (
    <div className="IntroContainer">
      <div className="IntroPoster">
        <img
          src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
          style={{ height: "500px" }}
          alt="poster"
        />
      </div>
      <div className="IntroMain">
        <Carousel variant="dark" style={{ height: "500px" }}>
          <Carousel.Item>
            {/* <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "310px" }}
              alt="img1"
            /> */}
            asdf
          </Carousel.Item>
          <Carousel.Item>qwer</Carousel.Item>
          <Carousel.Item>zxcv</Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

// export default DetailClubIntro;
