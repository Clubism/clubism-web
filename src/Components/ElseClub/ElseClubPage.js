import React, {useState} from 'react';
import '../style/ElseClubPage.scss';
import ElseClubList from './ElseClubList';
import ElseClubCategory from './ElseClubCategory';


const ElseClubCategories = [
    {id:0, title:'all', value:'전체보기'},
    {id:1, title:'study', value:'스터디'},
    {id:2, title:'project', value:'프로젝트'},
    {id:3, title:'subscribe', value:'구독'}
  ];

const ElseClubPage = ()=>{
  const [category, setCategory] = useState(0);
  return(
    <div className='ElseClubPage'>
      <ElseClubCategory category={ElseClubCategories} setCategory={setCategory}/>
      <ElseClubList category={category}/>
    </div>
  )
};

export default ElseClubPage;
  
