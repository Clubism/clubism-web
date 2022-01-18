<<<<<<< HEAD
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
=======
// import React, { useState, useEffect } from "react";
// import "../style/DetailClubIntro.scss";
// import Carousel from "react-bootstrap/Carousel";
// import axios from "axios";

// const DetailClubIntro = (clubdata) => {
//   const [clubData, setClubData] = useState({});
//   var tmp = window.location.pathname.split("/")[3];
//   useEffect(() => {
//     axios.get(`http://localhost:4000/mainClub/clubinfo/${tmp}`).then((res) => {
//       console.log(res.data);
//       setClubData(res.data);
//     });
//   }, []);
//   console.log(clubData);
//   return (
//     <>
//       <div className="IntroContainer">
//         <div className="IntroPoster">
//           <img
//             src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
//             style={{ width: "200px", height: "280px" }}
//             alt="poster"
//           />
//         </div>
//         <div className="IntroMain">
//           <Carousel variant="dark" style={{ height: "280px" }}>
//             <Carousel.Item>
//               {/* <img
//               src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
//               style={{ width: "310px" }}
//               alt="img1"
//             /> */}
//               asdf
//             </Carousel.Item>
//             <Carousel.Item>q마wer</Carousel.Item>
//             <Carousel.Item>zxcv</Carousel.Item>
//           </Carousel>
//         </div>
//       </div>
//       <div className="StatisticContainer">
//         <div className="IndivStat">
//           <div className="IndivStat_Q">전체인원</div>
//           <div className="IndivStat_A">{clubData.memberData}</div>
//         </div>
//         <div className="IndivStat">
//           <div className="IndivStat_Q">현재인원</div>
//           <div className="IndivStat_A">00명</div>
//         </div>
//         <div className="IndivStat">
//           <div className="IndivStat_Q">인원</div>
//           <div className="IndivStat_A">00명</div>
//         </div>
//         <div className="IndivStat">
//           <div className="IndivStat_Q">남여비율</div>
//           <div className="IndivStat_A">5:5</div>
//         </div>
//         <div className="IndivStat">
//           <div className="IndivStat_Q">햇수</div>
//           <div className="IndivStat_A">0년</div>
//         </div>
//         <div className="IndivStat">
//           <div className="IndivStat_Q">동아리방</div>
//           <div className="IndivStat_A">엠마오관 B102</div>
//         </div>
//       </div>
//     </>
//   );
// };
>>>>>>> moong

// export default DetailClubIntro;
