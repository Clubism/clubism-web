import React, { useEffect, useState } from "react";
import "../style/DetailClubPage.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailClubAll from "./All";
import DetailClubCurrent from "./Current";
import DetailClubQA from "./QA";
import DetailClubIntro from "./Intro";
import axios from "axios";
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
  const [readyFlag, setReadyFlag] = useState();
  const [Url, setUrl] = useState("");

  useEffect(() => {
    axios.get("../../dummy/clublist.json").then((res) => {
      setClubList(res.data);
      setReadyFlag(true);
    });
  }, []);

  useEffect(() => {
    console.log("here");
    setSelectedClub();
  }, [readyFlag]);

  // var clubName = "";
  console.log(window.location.pathname.split("/")[2]);
  setUrl(window.location.pathname.split("/")[2]); //////////////////////////******************* */

  const [clubName, setClubName] = useState("");
  const setSelectedClub = async () => {
    if (ClubList.length !== 0)
      setClubName(
        await ClubList.find((data) => data.label === props.name).name
      );
  };

  return (
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
        <div>none</div>
      )}
    </div>
  );
};

export default DetailClubPage;
