import React from 'react';
import MyPagePage from '../Components/MyPage/MyPagePage.js';
import MyPageContent from '../Components/MyPage/MyPageContent'
const MyPage = ({ match }) => {
  const {params} = match;
  console.log('My Page params : ', params.category);
  return (
    <>
      {params.category === undefined ? <MyPagePage /> : <MyPageContent category={params.category} />}
    </>
  );
}

export default MyPage;