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

// import { PinDropTwoTone } from "@material-ui/icons";

const DetailClubPage = (props) => {
  // console.log(props);
  // const [selectedClub, setSelectedClub] = useState([]);

  // var url;

  // if (props.status === 1) {
  //   url = "../../dummy/mainclubrecruitlist.json";
  // } else if (props.status === 2) {
  //   url = "../../dummy/subclubrecruitlist.json";
  // }

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     setSelectedClub(res.data);
  //   });
  // }, [props.name, url]);

  // var clubName = "";
  // var tmp = selectedClub.findIndex((data) => data.label === props.name);
  // // console.log(tmp);
  // if (tmp >= 0) clubName = selectedClub[tmp].name;
  // else {
  //   clubName = props.name;
  // }
  // console.log(selectedClub);
  const [ClubList, setClubList] = useState([]);
  const [readyFlag, setReadyFlag] = useState(false);
  const [Url, setUrl] = useState("");
  // const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    axios.get("../../dummy/clublist.json").then((res) => {
      setClubList(res.data);
      setReadyFlag(!readyFlag);
    });
  }, []);

  /* page reload
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        setReloadFlag(!reloadFlag);
      }
    }
  }, []);
  */

  useEffect(() => {
    // console.log("here");
    setSelectedClub();
  }, [readyFlag]); // 여기 두번째 변수 바뀌어야함 무조건.

  var tmp = window.location.pathname.split("/")[3];
  const [clubName, setClubName] = useState("");
  const history = useHistory();
  if (history.location.pathname.split("/")[3] !== tmp) {
    // setClubName(ClubList.find((data) => data.label === tmp).name);
    console.log("not same...");
  }

  // var clubName = "";
  // console.log(window.location.pathname.split("/")[3]);
  // if (ClubList.length !== 0)
  // setClubName(ClubList.find((data) => data.label === tmp).name);
  // console.log("tmp: " + tmp);
  // setUrl(window.location.pathname.split("/")[3]);
  // console.log("history: " + history.location.pathname);

  /*
  useEffect(() => {
    console.log("whyyyyyy");
    history.listen((location) => {
      console.log("page refreshed");
      console.log(location.pathname);
      setUrl(location.pathname.split("/")[3]);
    });
  }, [history]); // url이 바뀌는데 history가 안바뀜
*/
  const setSelectedClub = async () => {
    console.log("url: " + tmp);
    if (ClubList.length !== 0)
      setClubName(
        await ClubList.find((data) => data.label === tmp).name
        // tmp.length !== 0
        //   ? await ClubList.find((data) => data.label === props.name).name
        //   : await ClubList.find((data) => data.label === tmp).name
      );
  };

  return (
    <BrowserRouter>
      <div className="detail-container">
        {clubName !== "" ? (
          <Tabs
            defaultActiveKey="2"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab className="detail-tab" eventKey={1} title={clubName} disabled>
              {/* <Sonnet /> */}
            </Tab>
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
        ) : (
          <div style={{ background: "black" }}>here!!!</div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default DetailClubPage;
