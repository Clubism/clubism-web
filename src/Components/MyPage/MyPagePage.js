import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import axios from "../../Assets/axios";
/*
<Card>
         <CardHeader>관심 키워드</CardHeader>
         <CardContainer>
         <CardDescription>관심 키워드를 수정할 수 있습니다.</CardDescription>

         </CardContainer>
         <Button to="/mypage/favKeywords">수정</Button>
      </Card>
*/

const MyPagePage = ()=>{
  const [Info, SetInfo] = useState({});
  const dbId = localStorage.getItem("user_id");
  useEffect(()=>{
    axios.get(`auth/checkId?id=${dbId}`)
    .then((res)=>{
      SetInfo(res.data);
    });
  }, [dbId]);
  
  return(
    <MyPageContainer>
      <Card>
        <CardHeader>개인 정보</CardHeader>
        <CardContainer>
          <AccountCircleIcon color="#999999" style={{fontSize : "48px"}} />
          <UserName>{Info.username}님</UserName>
        </CardContainer>
        <Button to="/mypage/privateInfo">수정</Button>
      </Card>

      

      <Card>
         <CardHeader>관심 동아리</CardHeader>
         <CardContainer>
          <CardDescription>관심 동아리를 수정할 수 있습니다.</CardDescription>
          
         </CardContainer>
         <Button to="/mypage/favClubs">수정</Button>
      </Card>

      <Card>
         <CardHeader>관심 소모임</CardHeader>
         <CardContainer>
          <CardDescription>관심 소모임을 수정할 수 있습니다.</CardDescription>
         
         </CardContainer>
          <Button to="/mypage/favStudies">수정</Button>
      </Card>

      <Card>
         <CardHeader>회원 탈퇴</CardHeader>
         <CardContainer>
          <CardDescription>진짜로 떠나실 건가용? ㅠ.ㅠ</CardDescription>
         
         </CardContainer>
          <Button to="/mypage/SignOut">탈퇴</Button>
      </Card>
    </MyPageContainer>
  )
}

const MyPageContainer = styled.div`
  display : flex;
  width : 900px;
  margin : auto;
  padding-top : 50px;
  flex-wrap : wrap;
  justify-content : space-betwteen;
`;

const Card = styled.div`
  width : 400px;
  height : 250px;
  margin : 20px;
  border-radius : 2px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover{ 
    box-shadow: 0 14px 28px rgba(0,0,0,0.11), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const CardHeader = styled.div`
  display: inline-block;
  height : 20%;
  margin : auto;
  padding : 20px;

  font-size : 18px;
  font-weight : 600;
  color : #292929;
`;

const CardContainer = styled.div`
  height : 55%;
  padding : 20px;

`;

const UserName = styled.div`
  display : inline-block;
  margin-left : 20px;
`;

const Button = styled(Link)`
  display : block;
  text-decoration : none;
  color : #fff;
  border : none;
  padding : 5px 25px;
  border-radius : 3px;
  background :#023B6D;
  text-align : center;
  width : 100px;
  margin-left : 70%;


  &:hover{
    color : white;
  }
`;

const CardDescription = styled.div``;



export default MyPagePage;