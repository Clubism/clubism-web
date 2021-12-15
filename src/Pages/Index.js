import React from "react";
import IndexPage from "../Components/Index/IndexPage";
import ClubList from "../Components/Index/ClubList";

const Index = ({ history }) => {
  return (
    <div>
      <IndexPage />
      <ClubList />
    </div>
  );
};

export default Index;
