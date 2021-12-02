import React from "react";
import MainClubPageTest from "../Components/MainClub/MainClubPage_test";
import "../Components/style/MainClub.scss";

const MainClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
      <div className="mainClubContainer">
        <MainClubPageTest category={params.category} name={params.name} />
      </div>
    </div>
  );
};

export default MainClub;
