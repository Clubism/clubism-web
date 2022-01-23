import React from 'react';
import styled from 'styled-components';

const FavKeywords = ()=> {

  return (
    <FavKeywordsWrapper>
      <FavKeywordsHeader>관심 키워드 수정</FavKeywordsHeader>

      <FavKeywordsContainer>
        
      </FavKeywordsContainer>

      <FavKeywordsFooter>
        <Submit>확인</Submit>
        <Cancel>취소</Cancel>
      </FavKeywordsFooter>
      
    </FavKeywordsWrapper>
    );
};

const FavKeywordsWrapper = styled.div`
  display : block;
  width : 900px;
  margin : auto;
  margin-top : 40px;
  color : #333333;
  padding : 0px 100px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const FavKeywordsHeader = styled.div`
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

const FavKeywordsContainer = styled.div`
 
`;

const FavKeywordsFooter = styled.div`
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

export default FavKeywords;