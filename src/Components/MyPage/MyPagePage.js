import React, {useState} from 'react';
import '../style/MyPagePage.scss';
import MyPageContent from './MyPageContent';
const MyPagePage = (props)=> {
  const [content, setContent] = useState(0);
  const onClick = (index)=>{
    setContent(index);
    console.log(content);
  };
  return (
    <div className='MyPagePage'>
     
      <div className='MyPageCategory'>
        <ul>
          <li onClick={()=>onClick(0)}>개인 정보 수정</li>
          <li onClick={()=>onClick(1)}>관심 키워드 설정</li>
          <li onClick={()=>onClick(2)}>관심 동아리 설정</li>
          <li onClick={()=>onClick(3)}>관심 스터디 설정</li>
          <li onClick={()=>onClick(4)}>회원 탈퇴</li>
        </ul>
      </div>
      <MyPageContent index={content}/>
    </div>
  );
};

export default MyPagePage;