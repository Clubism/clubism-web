import React from 'react';
import styled from 'styled-components';

const FavClubs = ()=> {

  return (
    <FavClubsWrapper>
      <FavClubsHeader>관심 동아리 수정</FavClubsHeader>
      <FavClubsContainer>
        
      </FavClubsContainer>
      
    </FavClubsWrapper>
    );
};

const FavClubsWrapper = styled.div`
  display : flex;
  width : 900px;
  margin : auto;
  margin-top : 100px;
  
  color : #333333;

  //border : solid;
`;

const FavClubsHeader = styled.div`
  height : 100px;
  
  width : 100%;
  font-size : 24px;
  font-weight : 600;
  padding : 20px;

  //border : solid;
`;

const FavClubsContainer = styled.div`
  height : 800px;
  display : flex;
  
`;

export default FavClubs;