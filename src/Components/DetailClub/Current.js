import React from "react";
import "../style/DetailCurrent.scss";

const DetailClubCurrent = () => {
  return (
    <>
      <div className="CurrentContainer">
        <div className="HorContainer">
          <div className="CurrentPoster">
            <img
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              style={{ width: "200px", height: "280px" }}
              alt="current_poster"
            />
          </div>
          {/* *********** */}
          <div className="CurrentMain">
            <div className="MainTitle">[SGAEM] 2021 가을학기 신입부원 모집</div>
            <div> 모집 인원 | 0명</div>
          </div>
        </div>
        <div>동아리 소개</div>
      </div>
    </>
  );
};

export default DetailClubCurrent;
