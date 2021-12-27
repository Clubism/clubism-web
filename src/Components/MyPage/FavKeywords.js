import React from 'react';
import styled from 'styled-components';

const FavKeywords = ()=> {

  return (
    <FavKeywordsWrapper>
      <FavKeywordsHeader>관심 키워드 수정</FavKeywordsHeader>
      <FavKeywordsContainer>
        
      </FavKeywordsContainer>
      
    </FavKeywordsWrapper>
    );
};

const FavKeywordsWrapper = styled.div`
  display : flex;
  width : 900px;
  margin : auto;
  margin-top : 100px;
  
  color : #333333;

  //border : solid;
`;

const FavKeywordsHeader = styled.div`
  height : 100px;
  
  width : 100%;
  font-size : 24px;
  font-weight : 600;
  padding : 20px;

  //border : solid;
`;

const FavKeywordsContainer = styled.div`
  height : 800px;
  display : flex;
  
`;

export default FavKeywords;