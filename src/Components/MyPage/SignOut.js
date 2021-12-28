import React from 'react';
import styled from 'styled-components';

const SignOut = ()=> {

  return (
    <SignOutWrapper>
      <SignOutHeader>회원 탈퇴</SignOutHeader>
      <SignOutContainer>
        
      </SignOutContainer>
      
    </SignOutWrapper>
    );
};

const SignOutWrapper = styled.div`
  display : flex;
  width : 900px;
  margin : auto;
  margin-top : 100px;
  
  color : #333333;

  //border : solid;
`;

const SignOutHeader = styled.div`
  height : 100px;
  
  width : 100%;
  font-size : 24px;
  font-weight : 600;
  padding : 20px;

  //border : solid;
`;

const SignOutContainer = styled.div`
  height : 800px;
  display : flex;
  
`;

export default SignOut;