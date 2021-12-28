import React from 'react';
import styled from 'styled-components';

const FavStudies = ()=> {

  return (
    <FavStudiesWrapper>
      <FavStudiesHeader>관심 소모임 수정</FavStudiesHeader>
      <FavStudiesContainer>
        
      </FavStudiesContainer>
      
    </FavStudiesWrapper>
    );
};

const FavStudiesWrapper = styled.div`
  display : flex;
  width : 900px;
  margin : auto;
  margin-top : 100px;
  
  color : #333333;

  //border : solid;
`;

const FavStudiesHeader = styled.div`
  height : 100px;
  
  width : 100%;
  font-size : 24px;
  font-weight : 600;
  padding : 20px;

  //border : solid;
`;

const FavStudiesContainer = styled.div`
  height : 800px;
  display : flex;
  
`;

export default FavStudies;