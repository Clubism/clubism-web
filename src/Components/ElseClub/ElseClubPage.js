import React, { useState } from "react";
import "../style/ElseClubPage.scss";
import ElseClubList from "./ElseClubList";
<<<<<<< HEAD
import ElseClubCategory from "./ElseClubCategory";
=======
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
import ElseClubPosting from "./ElseClubPosting";
import ElseClubPost from "./ElseClubPost";
import { Route, Switch } from "react-router-dom";

const ElseClubPage = () => {
  const [post, setPost] = useState({});

  return (
    <div className="ElseClubPage">
<<<<<<< HEAD
      <ElseClubCategory />
      <Switch>
        <Route path="/elseClub" exact>
          <ElseClubList setPost={setPost} />
        </Route>
        <Route path="/elseClub/posting" exact>
          <ElseClubPosting />
        </Route>
=======
      <Switch>
        <Route path="/elseClub/posting" exact>
          <ElseClubPosting />
        </Route>
        <Route path="/elseClub/:category" exact>
          <ElseClubList setPost={setPost} />
        </Route>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
        <Route path="/elseClub/post/:id" exact>
          <ElseClubPost post={post} />
        </Route>
      </Switch>
    </div>
  );
};

export default ElseClubPage;
