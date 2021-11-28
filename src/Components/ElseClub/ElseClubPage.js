import React, {useEffect, useState} from 'react';
import '../style/ElseClubPage.scss';
import ElseClubList from './ElseClubList';
import ElseClubCategory from './ElseClubCategory';
import ElseClubPosting from './ElseClubPosting';
import ElseClubPost from './ElseClubPost';
import { Route, Switch} from 'react-router-dom';

const ElseClubPage = ()=>{
  const [post, setPost] = useState({});


  return(
    <div className='ElseClubPage'>
      <ElseClubCategory/>
      <Switch>
        <Route path='/elseClub' exact><ElseClubList setPost={setPost}/></Route>
        <Route path='/elseClub/posting' exact><ElseClubPosting /></Route>
        <Route path='/elseClub/post/:id' exact><ElseClubPost post={post}/></Route>
      </Switch>
    </div>
  )
};

export default ElseClubPage;
  
