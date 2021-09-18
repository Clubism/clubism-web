import React from 'react';
import '../style/FavStudies.scss'
const FavStudies = ()=> {

  return (
  <div className='FavStudies'>
  <form action="/mypage/edit/favStudies" method="post">
    <div className='FavStudies-header'>
      <div className='title'>관심 스터디 설정</div>
      <div className='update'>
        <button type="submit">update</button>
      </div>
    </div>
    <hr />
    <div className='FavStudies-content'>
    </div>
  </form>
</div>);
};

export default FavStudies;