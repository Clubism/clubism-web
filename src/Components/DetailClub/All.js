import axios from "axios";
import React, { useEffect } from "react";
import "../style/DetailClubAll.scss";

const DetailClubAll = (props) => {
  return (
    <div>
      <div className="MainContainer">
        <div className="PosterContainer">
          {/* data get from server */}
          <div className="IndivPoster">
            <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "250px", height: "350px" }}
              alt="poster"
            />
          </div>
          <div className="IndivPoster">
            <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "250px", height: "350px" }}
              alt="poster"
            />
          </div>
          <div className="IndivPoster">
            <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "250px", height: "350px" }}
              alt="poster"
            />
          </div>
        </div>
        {/* <div className="StatisticContainer">
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
        </div> */}
      </div>
    </div>
  );
};

export default DetailClubAll;
