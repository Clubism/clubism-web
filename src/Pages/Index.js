import React from "react";
import IndexPage from "../Components/Index/IndexPage";
import ClubList from "../Components/Index/ClubList";
import BookMark from "../Components/Index/BookMark";

const Index = ({ history }) => {
  return (
    <div>
      <IndexPage />
      <ClubList />
      <BookMark />
    </div>
  );
};

export default Index;
