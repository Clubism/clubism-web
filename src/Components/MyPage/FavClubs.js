import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";

const FavClubs = ()=> {
  const [Info, SetInfo] = useState({});
  const dbId = localStorage.getItem("user_id");
  // local storage에서 찾은 정보를 바탕으로 db에서 해당 사용자 정보를 찾아옴
  useEffect(()=>{
    axios.get(`http://localhost:4000/auth/checkId?id=${dbId}`)
    .then((res)=>{
      SetInfo(res.data);
    });
  }, [dbId]);

  console.log('Info : ', Info);

  return (
    <FavClubsWrapper>
      <FavClubsHeader>관심 동아리 수정</FavClubsHeader>

      <FavClubsContainer>
        <MainClub>
          <MainClubHeader>중앙동아리</MainClubHeader>
        </MainClub>
        
      </FavClubsContainer>

      <FavClubsFooter>
        <Submit>확인</Submit>
        <Cancel>취소</Cancel>
      </FavClubsFooter>
      
    </FavClubsWrapper>
    );
};

const MainClubHeader = styled.div`

`;
const MainClub = styled.div``;

const FavClubsWrapper = styled.div`
  display : block;
  width : 900px;
  margin : auto;
  margin-top : 40px;
  color : #333333;
  padding : 0px 100px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const FavClubsHeader = styled.div`
  height : 100px;
  display : flex;
  width : 900px;
  font-size : 24px;
  font-weight : 500;
  padding : 40px 80px;
  align-items : center;
  background-color: #013B6C;
  color : white;
  transform : translateX(-100px);
  //border : solid;
`;

const FavClubsContainer = styled.div`
 
`;

const FavClubsFooter = styled.div`
  display : flex;
  font-size : 14px;
  justify-content: flex-end;
  padding : 20px 0px;
`;

const Submit = styled.button`
  border-style : none;
  border-radius : 2px;
  padding : 12px 72px;
  margin : 0px 20px;
  background-color : #013B6C;
  color : white;
`;
const Cancel = styled.button`
  border-style : solid;
  border-width : thin;
  border-radius : 2px;
  padding : 12px 72px;
  background-color : white;
  border-color : #dadada;
  color : #013B6C;
`;

export default FavClubs;