import React from "react";
import "../style/DetailClubIntro.scss";
import Carousel from "react-bootstrap/Carousel";

const DetailClubIntro = () => {
  return (
    <>
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
      <div className="StatisticContainer">
        <div className="IndivStat">
          <div className="IndivStat_Q">전체인원</div>
          <div className="IndivStat_A">00명</div>
        </div>
        <div className="IndivStat">
          <div className="IndivStat_Q">현재인원</div>
          <div className="IndivStat_A">00명</div>
        </div>
        <div className="IndivStat">
          <div className="IndivStat_Q">인원</div>
          <div className="IndivStat_A">00명</div>
        </div>
        <div className="IndivStat">
          <div className="IndivStat_Q">남여비율</div>
          <div className="IndivStat_A">5:5</div>
        </div>
        <div className="IndivStat">
          <div className="IndivStat_Q">햇수</div>
          <div className="IndivStat_A">0년</div>
        </div>
        <div className="IndivStat">
          <div className="IndivStat_Q">동아리방</div>
          <div className="IndivStat_A">엠마오관 B102</div>
        </div>
      </div>
    </>
  );
};

export default DetailClubIntro;
