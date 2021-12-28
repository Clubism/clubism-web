import axios from "axios";
import React, { useEffect } from "react";
import "../style/DetailClubAll.scss";

const DetailClubAll = () => {
  //   useEffect(
  //     axios
  //       .get("http://localhost:4000/mainClub/chance")
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       }),
  //     []
  //   );
  return (
    <div>
      <div className="MainContainer">
        <div className="PosterContainer">
          {/* data get from server */}
          <div className="IndivPoster">zxcv</div>
          <div className="IndivPoster">asdf</div>
          <div className="IndivPoster">qwer</div>
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
      </div>
    </div>
  );
};

export default DetailClubAll;
