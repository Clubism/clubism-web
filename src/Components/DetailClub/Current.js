import React from "react";
import "../style/DetailCurrent.scss";

const DetailClubCurrent = () => {
  return (
    <>
      <div className="CurrentContainer">
        <div className="HorContainer">
          <img
            src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
            // style={{ width: "400px", height: "560px" }}
            className="CurrentPoster"
            alt="current_poster"
          />

          {/* *********** */}
          <div className="CurrentMain">
            <div className="Current_fst">
              {/* <div classNmae="MainTitle">[{clubname}] {club_title}</div> */}
              <div className="MainTitle">
                [SGAEM] 2021 가을학기 신입부원 모집
              </div>
              <div> 모집 인원 | 0명</div>
              <div> 모집 일정 | ~2022.03.31(금) 자정까지</div>
              <div> 지원 자격 | 가나다라마바사</div>
            </div>
            {/* ***************** */}
            <div className="Current_snd">
              <div>동아리 소개</div>
              <div>
                가나다라마바사가나다라마바사가나다라마바사가나다라마바사
                가나다라마바사가나다라마바사가나다라마바사가나다라마바사
                가나다라마바사가나다라마바사가나다라마바사가나다라마바사
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailClubCurrent;
