import React, { useEffect, useState } from "react";
import "../style/DetailClubPage.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailClubAll from "./All";
import DetailClubCurrent from "./Current";
import DetailClubQA from "./QA";
import DetailClubIntro from "./Intro";
import { PinDropTwoTone } from "@material-ui/icons";

const DetailClubPageTest = (props) => {
  console.log(props);
  const [selectedClub, setSelectedClub] = useState([]);

  var fetchURL;
  if (props.category === undefined) fetchURL = "";
  else if (props.category !== undefined && props.name === undefined)
    fetchURL = "../";
  else fetchURL = "../../";

<<<<<<< HEAD
    var url;
    if(props.statue===1){
        url = "dummy/mainclublist.json"
    }
    else if(props.status===2){
        url = "dummy/subclubrecruitlist.json"
    }

    useEffect(() => {
        fetch(fetchURL + url)
            .then((res) => res.json())
            .then(
                (result) => {
                    setSelectedClub(result.filter((data) => data.label === props.name));
                    console.log(props.name, fetchURL)
                },
                (error) => {
                    console.log(error);
                    return;
                }
            );
    }, [props.name, fetchURL]);
=======
  useEffect(() => {
    fetch(fetchURL + "dummy/mainclublist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setSelectedClub(result.filter((data) => data.label === props.name));
          console.log(props.name, fetchURL);
        },
        (error) => {
          console.log(error);
          return;
        }
      );
  }, [props.name, fetchURL]);
>>>>>>> dev

  var clubName = "";
  if (selectedClub.length !== 0) clubName = selectedClub[0].name;

<<<<<<< HEAD

    return (
        <div className="detail-container">
            {clubName !== "" ? (
                <Tabs
                    defaultActiveKey="2"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab
                        className="detail-tab"
                        eventKey={1}
                        title={clubName}
                        disabled
                    >
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
                </Tabs>) : (
                <div>none</div>
            )}
        </div>
    );
=======
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
>>>>>>> dev
};

export default DetailClubPageTest;
