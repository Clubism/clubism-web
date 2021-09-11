import React, {useState} from 'react';
import SubClubCategory from './SubClubCategory';
import SubClubs from './SubClubs';
import '../style/ClubPage.scss';

const SubClubCategories = [
    {id:0, title:'all', value:'전체보기'},
    {id:1, title:'liberalarts', value:'국제인문학부'},
    {id:2, title:'sdoss', value:'사회과학부'},
    {id:3, title:'smas', value:'지식융합미디어학부'},
    {id:4, title:'science', value:'자연과학부'},
    {id:5, title:'eng', value:'공학부'},
    {id:6, title:'econ', value:'경제학부'},
    {id:7, title:'sbs', value:'경영학부'},
  ];

const SubClubPage = ()=>{
  const [category, setCategory] = useState('전체보기');
  return(
    <div className='ClubPage'>
      <SubClubCategory category={SubClubCategories} setCategory={setCategory}/>
      <SubClubs category={category}/>
    </div>
  )
};

export default SubClubPage;
  
