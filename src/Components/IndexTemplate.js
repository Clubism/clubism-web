import React from 'react';
import './style/IndexTemplate.scss';
import {Link} from 'react-router-dom';


const IndexTemplate = ({children})=>{
  return (
    <div className='IndexTemplate'>
      <div className='topBar'>
        <div className='ghost'></div>
        <div className='logo'>
          <Link className='link' to="/">
          clubism
          </Link>
        </div>
        <div className='auth'>
          로그인 | 회원가입
        </div>
      </div>
      <div className='CategoryBar'>
        <div className='CategoryBarContainer'>
          <div className='mainClub'>
            <Link className='link' to="/mainClub">
            중앙 동아리
            </Link>
          </div>
          <div className='semiClub'>
            <Link className='link' to="/subClub">
            단과대 동아리 / 학회
            </Link>
          </div>
          <div className='elseClub'>
            <Link className='link' to="./elseClub">
              소모임
            </Link>
          </div>
        </div>
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  ) 
};

export default IndexTemplate;