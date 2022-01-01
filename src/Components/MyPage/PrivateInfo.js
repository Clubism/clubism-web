import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';

const PrivateInfo = ()=> {
  const [Info, SetInfo] = useState({});
  const [Form, setForm] = useState({
    id : "",
    password : "",
    username : "",
  });
  const dbId = localStorage.getItem("user_id");
  useEffect(()=>{
    axios.get(`http://localhost:4000/auth/checkId?id=${dbId}`)
    .then((res)=>{
      SetInfo(res.data);
    });
  }, [dbId]);

  useEffect(()=>{
    setForm({...Form, id : Info.id});
    setForm({...Form, username : Info.username});
  }, [Info]);
 
  console.log(Info);

  return (
    <PrivateInfoWrapper>
      <PrivateInfoHeader>개인 정보 수정</PrivateInfoHeader>
      <hr />
      <PrivateInfoContainer>

        <InputContainer>
          <Label for="username">이름</Label>
          <Input name="username" placeholder={Info.username}/>
          <hr />
        </InputContainer>
        
        <InputContainer>
          <Label for="id">id</Label>
          <Input name="id" value={Info.id} disabled/>
          <hr />
        </InputContainer>

        <InputContainer>
          <Label for="password">비밀번호</Label>
          <Input type="password" name="password" />
          <hr />
        </InputContainer>

        <InputContainer>
          <Label for="password2">비밀번호 확인</Label>
          <Input type="password" name="password2" />
          <hr />
        </InputContainer>

        <InputContainer>
        <CheckBoxLbel for="notification">가입한 이메일로 알람 및 소식을 받겠습니다
        <CheckBox type="checkbox"  name="notification" />
        </CheckBoxLbel>
          <hr />
        </InputContainer>
      
        <PrivateInfoFooter>
        <Submit>확인</Submit>
        <Cancel>취소</Cancel>
        </PrivateInfoFooter>
      </PrivateInfoContainer>
      
    </PrivateInfoWrapper>
    
  );
};

const PrivateInfoWrapper = styled.div`
  display : block;
  width : 900px;
  margin : auto;
  margin-top : 40px;
  color : #333333;
  padding : 0px 100px;

  //border : solid;
  //border-radius : 4px;
  //border-color : #dadada;
  //border-width : thin;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const PrivateInfoHeader = styled.div`
  height : 100px;
  display : flex;
  width : 100%;
  font-size : 24px;
  font-weight : 600;
  padding : 20px 0px 0px 0px;
  align-items : center;
  //border : solid;
`;

const PrivateInfoContainer = styled.div`
  display : block;  
  
`;

const InputContainer = styled.div`
`;


const Label = styled.label`
  font-size : 14px;
  width : 150px;
  color : #222222;
  
`;

const Input = styled.input`
  display : inline-block;
  font-size : 14px;
  padding : 5px 10px;
  width : 200px;
  border-color : #dadada;
  border-width : thin;
  border-radius : 4px;
  border-style : solid;
  
`;

const PrivateInfoFooter = styled.div`
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

const CheckBoxLbel = styled.label`
  font-size : 14px;
`;
const CheckBox = styled.input`
  width : 100px;
`;
/*
<div className='PrivateInfo'>
      <form action="/mypage/edit" method="post">
        <div className='PrivateInfo-header'>
          <div className='title'>개인 정보 수정</div>
          <div className='update'>
            <button type="submit">update</button>
          </div>
          
        </div>
        <hr />
        <div className='PrivateInfo-content'>
          <div>
            <label for="mp-username">이름</label>
            <input type="text" name="username" id="mp-username" />
          </div>
          <div>
            <label for="mp-nickname">닉네임</label>
            <input type="text" name="nickname" id="mp-nickname" />
          </div>
          <div>
            <label for="mp-major">학과</label>
            <input type="text" name="major" id="mp-major" />
          </div>
          <div>
            <label for="mp-contactInfo">연락처</label>
            <input type="text" name="contactInfo" id="mp-contactInfo" />
          </div>
          <div>
            <label for="mp-email">이메일</label>
            <input type="email" name="email" id="mp-email" />
          </div>
          <div>
            <label for="mp-password">비밀번호</label>
            <input type="password" name="password" id="mp-password" />
          </div>
          <div>
            <label for="mp-passwordCheck">비밀번호 확인</label>
            <input type="password" name="passwordCheck" id="mp-passwordCheck" />
          </div>
        </div>
      </form>
    </div>
*/
export default PrivateInfo;