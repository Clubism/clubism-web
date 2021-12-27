import React, {useState} from 'react';
import MyPageContent from './MyPageContent';
import styled from 'styled-components';

const MyPagePage = (props)=> {
  const [content, setContent] = useState(0);
  const onMenuClick = (index)=>{
    setContent(index);
    console.log(content);
  };
  return (
    <MyPageContainer>
      <MyPageCategoryContainer>
          <MyPageCategory>
          <PrivateInfo onClick={()=>onMenuClick(0)} color={content===0 ? '#013B6C' : '#a5a5a5'}>개인 정보 수정</PrivateInfo>
          <FavKeywords onClick={()=>onMenuClick(1)} color={content===1 ? '#013B6C' : '#a5a5a5'}>관심 키워드 설정</FavKeywords>
          <FavClubs onClick={()=>onMenuClick(2)} color={content===2 ? '#013B6C' : '#a5a5a5'}>관심 동아리 설정</FavClubs>
          <FavStudies onClick={()=>onMenuClick(3)} color={content===3 ? '#013B6C' : '#a5a5a5'}>관심 스터디 설정</FavStudies>
          <SignOut onClick={()=>onMenuClick(4)} color={content===4 ? '#013B6C' : '#a5a5a5'}>회원 탈퇴</SignOut>
        </MyPageCategory>
      </MyPageCategoryContainer>
      <MyPageContentContainer>
        <MyPageContent index={content}/>
      </MyPageContentContainer>
    </MyPageContainer> 
  );
};

const MyPageContentContainer = styled.div`
  width : 700px;
  margin-top : 100px;
`;

const MyPageContainer = styled.div`
  display : flex;
`;
const MyPageCategoryContainer = styled.div`
  width : 300px;
  margin-left : 100px;
  margin-top : 150px;
  color : #A5A5A5;
  font-size : 20px;
  font-weight : 600;
`;
const MyPageCategory = styled.div`
  cursor : pointer;
  text-align : left;
  
`;
const PrivateInfo = styled.div`
  margin-bottom: 20px;
  &:hover {
    color : #013B6C;
  }
  color : ${props => props.color}
`;

const FavKeywords = styled.div`
  margin-bottom: 20px;
  &:hover {
    color : #013B6C;
  }
  color : ${props => props.color}
`;

const FavClubs = styled.div`
  margin-bottom: 20px;
  &:hover {
    color : #013B6C;
  }
  color : ${props => props.color}
`;

const FavStudies = styled.div`
  margin-bottom: 20px;
  &:hover {
    color : #013B6C;
  }
  color : ${props => props.color}
`;

const SignOut = styled.div`
  margin-bottom: 20px;
  &:hover {
    color : #013B6C;
  }
  color : ${props => props.color}
`;


export default MyPagePage;