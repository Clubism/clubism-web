import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailClubAll from "./All";
// import DetailClubCurrent from "./Current";
import DetailClubQA from "./QA";
// import DetailClubIntro from "./Intro";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import { BrowserRouter, useHistory } from "react-router-dom";

import "../style/DetailClubPage.scss";
import "../style/DetailClubIntro.scss";
import "../style/DetailCurrent.scss";

const DetailClubPage = (props) => {
  // const [ClubList, setClubList] = useState([]);
  // const [readyFlag, setReadyFlag] = useState(false);
  // const [clubData, setClubData] = useState({});
  // // const [Url, setUrl] = useState("");

  // var Url = "";

  // useEffect(() => {
  //   axios.get("../../dummy/clublist.json").then((res) => {
  //     setClubList(res.data);
  //     setReadyFlag(!readyFlag);
  //   });
  //   // axios.get("http://localhost:4000/mainClub/clubs").then((res) => {
  //   //   console.log(res);
  //   // });
  // }, []);

  // useEffect(() => {
  //   // console.log("here");
  //   setSelectedClub();
  //   // console.log("praa");
  // }, [readyFlag]); // 여기 두번째 변수 바뀌어야함 무조건.

  // var tmp = window.location.pathname.split("/")[3];
  // const [clubName, setClubName] = useState("");
  // const history = useHistory();
  // if (history.location.pathname.split("/")[3] !== tmp) {
  //   // setClubName(ClubList.find((data) => data.label === tmp).name);
  //   // console.log("not same...");
  //   // setUrl(ClubList.find((data) => data.label === tmp).name);
  //   // console.log("Url: " + Url);
  //   // console.log("Props: " + props.name);
  //   Url = ClubList.find((data) => data.label === tmp).name;
  // }

  // const setSelectedClub = async () => {
  //   console.log("url: " + tmp);
  //   if (ClubList.length !== 0)
  //     setClubName(await ClubList.find((data) => data.label === tmp).name);
  // };

  // useEffect(() => {
  //   axios.get(`http://localhost:4000/mainClub/clubinfo/${tmp}`).then((res) => {
  //     console.log(res.data[0]);
  //     setClubData(res.data[0]);
  //   });
  // }, [tmp]);

  // clubName ==> 처음 들어왔을 때 표시될것
  // Url ==> rerendering시 표시될 것

  const [clubData, setClubData] = useState({});
  const [clubYear, setClubYear] = useState(0);
  const [clubRecruit, setClubRecruit] = useState({});
  var tmp = window.location.pathname.split("/")[3];

  const calcYear = (yearstring) => {
    var today = new Date();
    var birthDate = new Date(yearstring);
    var age = today.getFullYear() - birthDate.getFullYear() + 1;
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setClubYear(age);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/mainClub/clubinfo/${tmp}`).then((res) => {
      setClubData(res.data[0]);
    });
    axios.get(`http://localhost:4000/mainClub/recruitment`).then((res) => {
      setClubRecruit(res.data.find((dta) => dta.clubId.label === tmp));
    });
  }, [tmp]);

  useEffect(() => {
    calcYear(clubData.birth);
  }, [clubData]);

  // DetailClubIntro
  const DetailClubIntro = (clubdata) => {
    const [clubData, setClubData] = useState({});
    var tmp = window.location.pathname.split("/")[3];
    useEffect(() => {
      axios
        .get(`http://localhost:4000/mainClub/clubinfo/${tmp}`)
        .then((res) => {
          console.log(res.data[0]);
          setClubData(res.data[0]);
        });
    }, []);
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
            <div className="IndivStat_A">{clubData.memberTotal}명</div>
          </div>
          <div className="IndivStat">
            <div className="IndivStat_Q">현재인원</div>
            <div className="IndivStat_A">{clubData.memberNumber}명</div>
          </div>
          <div className="IndivStat">
            <div className="IndivStat_Q">뭐넣지</div>
            <div className="IndivStat_A">00명</div>
          </div>
          <div className="IndivStat">
            <div className="IndivStat_Q">남여비율</div>
            <div className="IndivStat_A">5:5</div>
          </div>
          <div className="IndivStat">
            <div className="IndivStat_Q">햇수</div>
            <div className="IndivStat_A">{clubYear}년</div>
          </div>
          <div className="IndivStat">
            <div className="IndivStat_Q">동아리방</div>
            <div className="IndivStat_A">{clubData.room}</div>
          </div>
        </div>
      </>
    );
  };

  // DetailClubCurrent
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
                  [{clubData.name}] {clubRecruit.description}
                </div>
                <div> 모집 인원 | {clubRecruit.recruitsize}명</div>
                <div> 모집 일정 | {clubRecruit.deadline}</div>
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

  return (
    <BrowserRouter>
      <div className="detail-container">
        <Tabs
          defaultActiveKey="2"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {clubData.name === "" ? (
            <Tab
              className="detail-tab"
              eventKey={1}
              title={clubData.name}
              disabled
            />
          ) : (
            <Tab
              className="detail-tab"
              eventKey={1}
              title={clubData.name}
              disabled
            />
          )}
          <Tab className="detail-tab" eventKey={2} title="동아리 소개">
            <DetailClubIntro clubdata={clubData} />
          </Tab>
          <Tab className="detail-tab" eventKey={3} title="현재 모집 공고">
            <DetailClubCurrent />
          </Tab>
          <Tab className="detail-tab" eventKey={4} title="전체 모집 공고">
            <DetailClubAll category={props.category} name={props.name} />
          </Tab>
          <Tab className="detail-tab" eventKey={5} title="Q&A">
            <DetailClubQA />
          </Tab>
        </Tabs>
        {/*         
        <div>{clubName}</div>
        <div>{clubData.name}</div>
        <div>현재인원 : {clubData.memberNumber}</div>
        <div>전체인원 : {clubData.memberTotal}</div>
        <div>동아리방 : {clubData.room}</div>
        <div>햇수 : {clubData.birth}</div> */}
      </div>
    </BrowserRouter>
  );
};

export default DetailClubPage;
