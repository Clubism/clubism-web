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
          <div className="CurrentMain">asdfasdasfd</div>
        </div>
        <div>동아리 소개</div>
      </div>
    </>
  );
};

export default DetailClubCurrent;
