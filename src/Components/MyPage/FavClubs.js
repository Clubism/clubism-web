import React from 'react';
import '../style/FavClubs.scss'
const FavClubs = ()=> {

  return (
  <div className='FavClubs'>
  <form action="/mypage/edit/FavClubs" method="post">
    <div className='FavClubs-header'>
      <div className='title'>관심 동아리 설정</div>
      <div className='update'>
        <button type="submit">update</button>
      </div>
    </div>
    <hr />
    <div className='FavClubs-content'>
    </div>
  </form>
</div>);
};

export default FavClubs;