import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chip from '@mui/material/Chip';
import materialStyled from '@mui/material/styles/styled';
import axios from "axios";

const CustomChip = materialStyled(Chip)`
  border : none;
  box-shadow : 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin : 0px 10px;
  
`;

const FavClubs = () => {
  //const [Info, SetInfo] = useState({ favorite: [] });
  const [FavClubs, SetFavClubs] = useState([]); 
  const dbId = localStorage.getItem("user_id");

  // local storage에서 찾은 정보를 바탕으로 db에서 해당 사용자 정보를 찾아옴
  useEffect(() => {
    console.log("called");
    axios.get(`http://localhost:4000/auth/checkId?id=${dbId}`).then((res) => {
      //SetInfo(res.data);
      // 즐겨찾기 동아리만 따로 저장
      SetFavClubs(res.data.favorite);
    });
  }, []);


  // 삭제된 동아리는 없애기 
  const handleDelete = (f) => {
    if(FavClubs !== []){
      SetFavClubs(FavClubs.filter(club => club !== f));
    }
  };

  return (
    <FavClubsWrapper>
      <FavClubsHeader>관심 동아리 수정</FavClubsHeader>

      <FavClubsContainer>
        <MainClub>
          <MainClubHeader>중앙동아리</MainClubHeader>
          <MainClubContainer>
            {FavClubs.map((f) => {
              return (
                <CustomChip key={f} label={f} variant="outlined" onDelete={()=>{handleDelete(f)}} />
              );
            })}
          </MainClubContainer>
        </MainClub>
      </FavClubsContainer>

      <FavClubsFooter>
        <Submit>확인</Submit>
        <Cancel>취소</Cancel>
      </FavClubsFooter>
    </FavClubsWrapper>
  );
};

const MainClubContainer = styled.div``;
const MainClubHeader = styled.div`
  margin : 20px 0px;
  font-size : 18px;
  font-weight : bold;
`;
const MainClub = styled.div``;

const FavClubsWrapper = styled.div`
  display: block;
  width: 900px;
  margin: auto;
  margin-top: 40px;
  min-height : 500px;
  color: #333333;
  padding: 0px 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position : relative;
`;

const FavClubsHeader = styled.div`
  height: 100px;
  display: flex;
  width: 900px;
  font-size: 24px;
  font-weight: 500;
  padding: 40px 80px;
  align-items: center;
  background-color: #013b6c;
  color: white;
  transform: translateX(-100px);
  //border : solid;
`;

const FavClubsContainer = styled.div``;

const FavClubsFooter = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  padding: 20px 0px;
  position : absolute;
  bottom : 0;
  
`;

const Submit = styled.button`
  border-style: none;
  border-radius: 2px;
  padding: 12px 72px;
  margin: 0px 20px;
  background-color: #013b6c;
  color: white;
`;
const Cancel = styled.button`
  border-style: solid;
  border-width: thin;
  border-radius: 2px;
  padding: 12px 72px;
  background-color: white;
  border-color: #dadada;
  color: #013b6c;
`;

export default FavClubs;
