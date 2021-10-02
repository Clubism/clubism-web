import React, {useState, useEffect} from 'react';
import '../style/ElseClubPage.scss';
import ElseClubList from './ElseClubList';
import ElseClubCategory from './ElseClubCategory';
import ElseClubPosting from './ElseClubPosting';
import ElseClubPost from './ElseClubPost';
import { Route, Switch} from 'react-router-dom';


const ElseClubCategories = [
    {id:0, title:'all', value:'전체보기'},
    {id:1, title:'study', value:'스터디'},
    {id:2, title:'project', value:'프로젝트'},
    {id:3, title:'subscribe', value:'구독'}
  ];

const ElseClubPage = ()=>{
  const [category, setCategory] = useState('전체보기');
  const [viewList, setViewList] = useState(1);
  const [post, setPost] = useState({});

  return(
    <div className='ElseClubPage'>
      <ElseClubCategory category={ElseClubCategories} setCategory={setCategory}/>
      {/* {viewList?<ElseClubList category={category} setViewList={setViewList}/>:<ElseClubPosting category={category} setViewList={setViewList}/>} */}
      <Switch>
        <Route path='/elseClub' exact><ElseClubList category={category} setViewList={setViewList} setPost={setPost}/></Route>
        <Route path='/elseClub/posting' exact><ElseClubPosting category={category} setViewList={setViewList} /></Route>
        <Route path='/elseClub/post' exact><ElseClubPost post={post}/></Route>
      </Switch>
      {/* <Route path='/elseClub' component={ElseClubList} exact />
      <Route path='/elseClub/posting' component={ElseClubPosting} exact /> */}
    </div>
  )
};

export default ElseClubPage;
  
