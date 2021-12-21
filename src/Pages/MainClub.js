import React from "react";
import MainClubPage from "../Components/MainClub/MainClubPage";
// import "../Components/style/MainClub.scss";
import styled from "styled-components";

const MainClub = (props) => {
  const { params } = props.match;
  // console.log(params.category, params.name);

  return (
    <div>
      <MainClubContainer>
        <MainClubPage category={params.category} name={params.name} />
      </MainClubContainer>
    </div>
  );
};

export default MainClub;

const MainClubContainer = styled.div`
  width: 100%;
`;

