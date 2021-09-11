import React from 'react';
import '../style/IndexPage.scss';
import ClubRolling from './ClubRolling';
import ClubList from './ClubList';
import {IoIosAdd} from 'react-icons/io';

const IndexPage = ()=>{
  return (
    <div>
      <div className="indexBar">
        <div className="indexBarTitle">모집중인 동아리</div>
        <div className="viewMore"><IoIosAdd />더보기</div>
      </div>
      <ClubRolling />
      <ClubList />
    </div>
  )
};

export default IndexPage;