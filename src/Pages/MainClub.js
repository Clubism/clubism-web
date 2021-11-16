import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
// import MainClubPage from '../Components/MainClub/MainClubPage';
// import MainClubCategory from '../Components/MainClub/MainClubCategory';
import MainClubCategoryTest from "../Components/MainClub/MainClubCategory_test";
import MainClubPageTest from "../Components/MainClub/MainClubPage_test";
import "../Components/style/MainClub.scss";

const MainClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
      <IndexTemplate />
      <div className="mainClubContainer">
        <MainClubCategoryTest category={params.category} name={params.name} />
        <MainClubPageTest category={params.category} name={params.name} />
      </div>
    </div>
  )
}

export default MainClub;
