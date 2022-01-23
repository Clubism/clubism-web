<<<<<<< HEAD
import React from 'react';
import MainClubCategoryTest from "../Components/MainClub/MainClubCategory_test";
import MainClubPageTest from "../Components/MainClub/MainClubPage_test";
import "../Components/style/MainClub.scss";

=======
import React from "react";
import MainClubPage from "../Components/MainClub/MainClubPage";
// import "../Components/style/MainClub.scss";
import styled from "styled-components";
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b

const MainClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
<<<<<<< HEAD
      <div className="mainClubContainer">
        <MainClubCategoryTest category={params.category} name={params.name} />
        <MainClubPageTest category={params.category} name={params.name} />
      </div>
=======
      <MainClubContainer>
        <MainClubPage category={params.category} name={params.name} />
      </MainClubContainer>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
    </div>
  );
};

export default MainClub;

const MainClubContainer = styled.div`
  width: 100%;
`;

