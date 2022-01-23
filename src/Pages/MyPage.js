import React from 'react';
import MyPagePage from '../Components/MyPage/MyPagePage.js';
import MyPageContent from '../Components/MyPage/MyPageContent'
const MyPage = ({ match }) => {
  const {params} = match;
  console.log('My Page params : ', params.category);
  return (
<<<<<<< HEAD
    <MyPagePage />
  )
=======
    <>
      {params.category === undefined ? <MyPagePage /> : <MyPageContent category={params.category} />}
    </>
  );
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
}

export default MyPage;