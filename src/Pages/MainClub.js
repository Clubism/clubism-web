import React from "react";
import MainClubPage from "../Components/MainClub/MainClubPage";
import "../Components/style/MainClub.scss";

const MainClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
      <div className="mainClubContainer">
        <MainClubPage category={params.category} name={params.name} />
      </div>
    </div>
  );
};

export default MainClub;
