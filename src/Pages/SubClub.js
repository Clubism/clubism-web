import React from "react";
<<<<<<< HEAD
import SubClubCategory from "../Components/SubClub/SubClubCategory";
=======
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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
