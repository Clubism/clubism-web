import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import materialStyled from "@mui/material/styles/styled";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";

import axios from "../../Assets/axios";

const CustomInput = materialStyled(Input)({
  "&.MuiInput-underline:after": {
    borderBottomColor: "#023B6D"
  },
  width: "250px"
});

const CustomInputLabel = materialStyled(InputLabel)({
  "&.Mui-focused": {
    color: "#023B6D"
  }
});

const Emailverification = ({ open, setOpen, setSuccess, Info, setInfo }) => {
  // open : 모달창을 열 지, close : 모달창을 닫을 지, succcess : 이메일 인증을 성공했는지

  // 백 단에서 받은 인증 번호
  const [serverCode, setServerCode] = useState("");

  // 사용자가 입력한 인증 번호
  const [userCode, setUserCode] = useState("");

  // 인증번호 유효 시간 설정
  // 구현 할질 말지 고민 중... 만들면 복잡한데 굳이 없어도 될 거 같은디?
  const [timeOut, setTimeOut] = useState(false);


  // 닫기 버튼 클릭 시
  const onCloseClick = () => {
    setOpen(false);
    setSuccess(false);
  };

  // 인증번호 확인 버튼 클릭 시
  const onSubmitClick = () => {
    if (serverCode === parseInt(userCode)) {
      alert("인증이 완료되었습니다");

      // 모달창은 닫고 인증 완료 플래그는 true로 세팅
      setOpen(false);
      setSuccess(true);
    } else {
      // alert만 띄우고 모달 창은 유지
      alert("인증번호를 확인해 주세요");
    }
  };

  // Info state에 서강대 이메일 바인딩
  const onMailChange = (e) => {
    setInfo({ ...Info, emailSogang: e.target.value });
  };

  // 메일 인증 버튼 클릭 시
  const onMailSubmit = () => {
    // 이메일 유효성 검사
    const { emailSogang } = Info;
    console.log(emailSogang.slice(-13));
    if (emailSogang.slice(-13) !== '@sogang.ac.kr') {
      alert("이메일을 확인해 주세요");
      return;
    }

    // 인증 코드 요청
    axios
      .post("/auth/emailVerification", {
        sendEmail: Info.emailSogang
      })
      .then((res) => {
        alert("이메일 전송이 완료되었습니다");
        // 서버에서 받은 인증 번호 세팅
        setServerCode(res.data.code);
      })
      .catch((err) => {});
  };

  return (
    <ModalWrapper open={open === true ? "block" : "none"}>
      <ModalContainer>
        <CloseContainer onClick={onCloseClick}>
          <CloseIcon />
        </CloseContainer>
        <TextFieldContainer>
          <FormControl variant="standard">
            <CustomInputLabel>서강대학교 이메일</CustomInputLabel>
            <CustomInput type="email" value={Info.emailSogang} onChange={onMailChange} />
          </FormControl>

          <Button onClick={onMailSubmit}>전송</Button>
        </TextFieldContainer>

        <TextFieldContainer>
          <FormControl variant="standard">
            <CustomInputLabel>인증번호</CustomInputLabel>
            <CustomInput
              value={userCode}
              onChange={(e) => {
                // 사용자가 입력한 인증 번호 세팅
                setUserCode(e.target.value);
              }}
            />
          </FormControl>

          <Button onClick={onSubmitClick}>확인</Button>
        </TextFieldContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

const CloseContainer = styled.div`
  text-align: right;
  padding: 10px;
  margin-bottom: 100px;
  cursor: pointer;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 5px 10px;
  background: #013b6c;
  color: white;
  border-radius: 4px;
  margin-left: 10px;
`;

const TextFieldContainer = styled.div`
  margin: 20px auto;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const modalBgShow = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ModalWrapper = styled.div`
  display: ${(props) => props.open};
  ${(props) => props.open && `align-items : center; `}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${modalBgShow} 0.3s;
`;

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;
const ModalContainer = styled.div`
  width: 600px;
  height: 400px;
  margin: 200px auto;

  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: ${modalShow} 0.3s;
  overflow: hidden;
`;

export default Emailverification;
