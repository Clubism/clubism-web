import React from "react";
import IndexTemplate from "../Components/IndexTemplate";
import ElseClubPage from "../Components/ElseClub/ElseClubPage";
import { BrowserRouter } from "react-router-dom";

const MainClub = () => {
  return (
    <BrowserRouter>
      <IndexTemplate>
        <ElseClubPage />
      </IndexTemplate>
    </BrowserRouter>
  );
};

export default MainClub;
