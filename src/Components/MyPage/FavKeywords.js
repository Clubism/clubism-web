import React from 'react';
import '../style/FavKeywords.scss'
const FavKeywords = ()=> {

  return (
  <div className='FavKeywords'>
  <form action="/mypage/edit/favKeywords" method="post">
    <div className='FavKeywords-header'>
      <div className='title'>관심 키워드 설정</div>
      <div className='update'>
        <button type="submit">update</button>
      </div>
    </div>
    <hr />
    <div className='FavKeywords-content'>
    </div>
  </form>
</div>);
};

export default FavKeywords;