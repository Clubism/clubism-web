import React, { useEffect, useState } from "react";
import "../style/DetailClubPage.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailClubAll from "./All";
import DetailClubCurrent from "./Current";
import DetailClubQA from "./QA";
import DetailClubIntro from "./Intro";
import axios from "axios";
import { BrowserRouter, useHistory } from "react-router-dom";

const DetailClubPage = (props) => {
  const [ClubList, setClubList] = useState([]);
  const [readyFlag, setReadyFlag] = useState(false);
  // const [Url, setUrl] = useState("");
  var Url = "";

  useEffect(() => {
    axios.get("../../dummy/clublist.json").then((res) => {
      setClubList(res.data);
      setReadyFlag(!readyFlag);
    });
    // axios.get("http://localhost:4000/mainClub/clubs").then((res) => {
    //   console.log(res);
    // });
  }, []);

  useEffect(() => {
    // console.log("here");
    setSelectedClub();
  }, [readyFlag]); // 여기 두번째 변수 바뀌어야함 무조건.

  var tmp = window.location.pathname.split("/")[3];
  const [clubName, setClubName] = useState("");
  const history = useHistory();
  if (history.location.pathname.split("/")[3] !== tmp) {
    // setClubName(ClubList.find((data) => data.label === tmp).name);
    // console.log("not same...");
    // setUrl(ClubList.find((data) => data.label === tmp).name);
    // console.log("Url: " + Url);
    // console.log("Props: " + props.name);
    Url = ClubList.find((data) => data.label === tmp).name;
  }

  const setSelectedClub = async () => {
    console.log("url: " + tmp);
    if (ClubList.length !== 0)
      setClubName(await ClubList.find((data) => data.label === tmp).name);
  };

  // clubName ==> 처음 들어왔을 때 표시될것
  // Url ==> rerendering시 표시될 것

  return (
    <BrowserRouter>
      <div className="detail-container">
        <Tabs
          defaultActiveKey="2"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {Url === "" ? (
            <Tab className="detail-tab" eventKey={1} title={clubName} disabled>
              {/* <Sonnet /> */}
            </Tab>
          ) : (
            <Tab className="detail-tab" eventKey={1} title={Url} disabled>
              {/* <Sonnet /> */}
            </Tab>
          )}
          <Tab className="detail-tab" eventKey={2} title="동아리 소개">
            <DetailClubIntro />
          </Tab>
          <Tab className="detail-tab" eventKey={3} title="현재 모집 공고">
            <DetailClubCurrent />
          </Tab>
          <Tab className="detail-tab" eventKey={4} title="전체 모집 공고">
            <DetailClubAll />
          </Tab>
          <Tab className="detail-tab" eventKey={5} title="Q&A">
            <DetailClubQA />
          </Tab>
        </Tabs>
      </div>
    </BrowserRouter>
  );
};

export default DetailClubPage;
