import React, { useState } from "react";
import "../style/ElseClubPage.scss";
import ElseClubList from "./ElseClubList";
import ElseClubPosting from "./ElseClubPosting";
import ElseClubPost from "./ElseClubPost";
import ElseClubUpdatePosting from "./ElseClubUpdatePosting";
import { Route, Switch } from "react-router-dom";

const ElseClubPage = () => {
  const [post, setPost] = useState({});

  return (
    <div className="ElseClubPage">
      <Switch>
        <Route path="/elseClub/posting" exact>
          <ElseClubPosting />
        </Route>
        <Route path="/elseClub/:category" exact>
          <ElseClubList setPost={setPost} />
        </Route>
        <Route path="/elseClub/post/:id" exact>
          <ElseClubPost post={post} />
        </Route>
        <Route path="/elseClub/updatePost/:id" exact>
          <ElseClubUpdatePosting post={post} />
        </Route>
      </Switch>
    </div>
  );
};

export default ElseClubPage;
