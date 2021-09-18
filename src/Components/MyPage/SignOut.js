import React from 'react';
import '../style/SignOut.scss'
const SignOut = ()=> {

  return (
  <div className='SignOut'>
  <form action="/mypage/edit/SignOut" method="post">
    <div className='SignOut-header'>
      <div className='title'>회원 탈퇴</div>
      <div className='update'>
        <button type="submit">sign out</button>
      </div>
    </div>
    <hr />
    <div className='SignOut-content'>
    </div>
  </form>
</div>);
};

export default SignOut;