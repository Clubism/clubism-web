import React from "react";
import IndexPage from "../Components/Index/IndexPage";
<<<<<<< HEAD

const Index = ({ history }) => {
  return <IndexPage />;
=======
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
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
};

export default Index;
