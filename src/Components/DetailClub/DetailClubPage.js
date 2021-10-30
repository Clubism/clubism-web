import React from "react";
import "../style/DetailClubPage.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailClubAll from "./All";
import DetailClubCurrent from "./Current";
import DetailClubQA from "./QA";
import DetailClubIntro from "./Intro";

const DetailCulbPage = (props) => {
  return (
    <div className="detail-container">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          className="detail-tab"
          eventKey={1}
          title={props.selectedClub.name}
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
      </Tabs>
    </div>
  );
};

export default DetailCulbPage;
