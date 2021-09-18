import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import MyPagePage from '../Components/MyPage/MyPagePage.js';

const MainClub = ({ match }) => {
  return (
    <IndexTemplate><MyPagePage /></IndexTemplate>
  )
}

export default MainClub;