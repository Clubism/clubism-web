import React, { useEffect, useState } from "react";
import MainClubs from "./MainClubs";
// import DetailClubPage from "../DetailClub/DetailClubPage";
import DetailClubPage from "../DetailClub/DetailClubPage";
import "../style/ClubPage.scss";

const MainClubPage = (props) => {
  console.log(props);
  const [detailPage, setDetailPage] = useState(false);

  useEffect(() => {
    if (props.category === undefined) setDetailPage(false);
    else if (props.category !== undefined && props.name === undefined)
      setDetailPage(false);
    else setDetailPage(true);
  }, [props.category, props.name]);

  console.log(detailPage);
  return (
    <div className="mainClubBox">
      {detailPage ? (
        <DetailClubPage
          category={props.category}
          name={props.name}
          status={1}
        />
      ) : (
        <MainClubs category={props.category} name={props.name} />
      )}
    </div>
  );
};

export default MainClubPage;
