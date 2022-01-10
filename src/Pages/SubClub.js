import React from "react";
import SubClubPage from "../Components/SubClub/SubClubPage";
import "../Components/style/SubClub.scss";

const SubClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
      <div className="SubClubContainer">
        <SubClubPage category={params.category} name={params.name} />
      </div>
    </div>
  );
};

export default SubClub;
