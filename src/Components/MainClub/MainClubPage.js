import React, { useEffect, useState } from "react";
import MainClubs from "./MainClubs";
// import DetailClubPage from "../DetailClub/DetailClubPage";
// import DetailClubPage from "../DetailClub/DetailClubPage_tmp";
import DetailClubPage from "../DetailClub/DetailClubPage";
import "../style/ClubPage.scss";
import { BrowserRouter } from "react-router-dom";

const MainClubPage = (props) => {
  console.log("MainClubPage props : ", props);
  const [detailPage, setDetailPage] = useState(false);

  useEffect(() => {
    if (props.category === undefined) setDetailPage(false);
    else if (props.category !== undefined && props.name === undefined)
      setDetailPage(false);
    else setDetailPage(true);
  }, [props.category, props.name]);

  console.log("MainClubPage detailPage : ", detailPage);
  return (
    <div className="mainClubBox">
      {detailPage ? (
        <BrowserRouter>
          <DetailClubPage
            category={props.category}
            name={props.name}
            status={1}
          />
        </BrowserRouter>
      ) : (
        <MainClubs category={props.category} name={props.name} />
      )}
    </div>
  );
};

export default MainClubPage;
