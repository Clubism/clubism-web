import React from 'react';
import '../style/PrivateInfo.scss';

const PrivateInfo = ()=> {
  return (
    <div className='PrivateInfo'>
      <form action="/mypage/edit" method="post">
        <div className='PrivateInfo-header'>
          <div className='title'>개인 정보 수정</div>
          <div className='update'>
            <button type="submit">update</button>
          </div>
          
        </div>
        <hr />
        <div className='PrivateInfo-content'>
          <div>
            <label for="mp-username">이름</label>
            <input type="text" name="username" id="mp-username" />
          </div>
          <div>
            <label for="mp-nickname">닉네임</label>
            <input type="text" name="nickname" id="mp-nickname" />
          </div>
          <div>
            <label for="mp-major">학과</label>
            <input type="text" name="major" id="mp-major" />
          </div>
          <div>
            <label for="mp-contactInfo">연락처</label>
            <input type="text" name="contactInfo" id="mp-contactInfo" />
          </div>
          <div>
            <label for="mp-email">이메일</label>
            <input type="email" name="email" id="mp-email" />
          </div>
          <div>
            <label for="mp-password">비밀번호</label>
            <input type="password" name="password" id="mp-password" />
          </div>
          <div>
            <label for="mp-passwordCheck">비밀번호 확인</label>
            <input type="password" name="passwordCheck" id="mp-passwordCheck" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrivateInfo;