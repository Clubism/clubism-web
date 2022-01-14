import React, { useEffect, useState } from "react";
import "../style/LoginPage.scss";
import axios from "axios";
import styled from "styled-components";
import materialStyled from "@mui/material/styles/styled";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import EmailVerification from "./EmailVerification";
import { useDispatch } from "react-redux";

import * as actions from "../../redux/actions/auth";

// text field styling
const CustomInput = materialStyled(Input)({
  "&.MuiInput-underline:after": {
    borderBottomColor: "#023B6D"
  },
  width: "450px"
});

const CustomInputLabel = materialStyled(InputLabel)({
  "&.Mui-focused": {
    color: "#023B6D"
  }
});

const CustomNativeSelect = materialStyled(NativeSelect)({
  "&.MuiNativeSelect-select:focus": {
    color: "#023B6D"
  },
  "&.MuiNativeSelect-select:after": {
    color: "#023B6D"
  }
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [pwValidation, setPwValidation] = useState(false); // 비밀번호 두개 서로 일치하는 지
  const [success, setSuccess] = useState(false); // 서강대 이메일 인증 성공 했는지
  const [modalOpen, setModalOpen] = useState(false); // 서강대 이메일 인증창 띄울 지
  const [majors, setMajors] = useState([]); // 전공 option 쫘라락 띄울려고
  const [Info, setInfo] = useState({ // 회원가입 폼 정보
    username: "",
    id: "",
    password: "",
    password2: "",
    favorites: [],
    major: "",
    subMajor: "",
    emailNotification: "",
    emailSogang: ""
  });

  // 전공 option 쫘라락 띄우려고 전공 정보 받아옴
  useEffect(() => {
    axios.get("../../dummy/departments.json").then((res) => {
      setMajors(res.data);
    });
  }, []);

  // 폼 state 바인딩
  const onInfoChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value
    });
  };

  // 가입 버튼 클릭 시
  const onClickSubmit = (e) => {
    e.preventDefault();

    if (success === false) {// 이메일 인증 실페
      alert("서강대학교 메일 인증이 필요합니다"); return;
    }
    if (Info.username === "") { // 이름 필드가 빈 경우
      alert("이름을 입력해 주세요"); return;
    }
    if (Info.id === "") { // id 필드가 빈 경우
      alert("id를 입력해 주세요"); return;
    }
    if (Info.password === "" || Info.password2 === "") { // 비밀번호가 빈 경우
      alert("비밀번호를 입력해 주세요"); return;
    }
    // 비밀번호가 일치하지 않는 경우
    if (pwValidation === false) {
      alert("비밀번호가 일치하지 않습니다"); return;
    }
    // 전공이 빈 경우
    if(Info.major === ""){
      alert("전공을 입력해 주세요"); return;
    }
    // 전공과 부전공이 같은 경우... 근데 이건 굳이 없어도 될 거 같기도?
    if(Info.major === Info.submajor){
      alert("부전공이 있는 경우에만 입력해 주세요"); return;
    }

    // id 중복 체크
    axios.get(`http://localhost:4000/auth/checkId?id=${Info.id}`)
    .then((res) => {
      if (res.data !== null) {
        alert("이미 존재하는 id입니다"); return;
      }
    })
    .catch((err) => {
      console.log(err);
    });

    // 회원 가입 시키고
    axios.post("http://localhost:4000/auth/join", Info, {withCredentials: true})
    .then(() => {
      // 로그인 시킴
      axios.post("http://localhost:4000/auth/login", {id : Info.id, password:Info.password})
      .then((res)=>{
        setInfo({
          username: "", id: "", password: "", password2: "", favorites: [], 
          major: "", subMajor: "", emailNotification: "", emailSogang: ""
        });
        localStorage.setItem("user_id", res.data.user.id);
        localStorage.setItem("user_db_id", res.data.user._id);
        localStorage.setItem("token", res.data.token);

        // 항상 헤더에 토큰을 넣어 다니도록 세팅
        axios.defaults.headers.common["Authorization"] = `Bearer ${
          res.data.token
        }`;

        dispatch(actions.setAuth(true));
        window.location.replace("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };
  // 비밀번호 유효성 체크
  useEffect(() => {
    setPwValidation(Info.password === Info.password2);
  }, [Info.password, Info.password2]);

  // 체크박스를 눌렀을 때 모달창을 띄우는 함수
  const ToggleCheckbox = (e) => {
    if (e.target.checked) {
      setModalOpen(true);
    }
  };
  return (
    <SignupPageWrapper>
      <SignUpPageHeader>회원 가입</SignUpPageHeader>

      <SignUpPageContainer>
        <TextFieldContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={success}
                label="서강대학교 메일 인증"
                icon={<CheckBoxOutlineBlankRoundedIcon />}
                checkedIcon={<CheckBoxOutlinedIcon />}
              />
            }
            label="서강대학교 메일 인증"
            onChange={ToggleCheckbox}
          />
          <EmailVerification
            open={modalOpen}
            setOpen={setModalOpen}
            setSuccess={setSuccess}
            Info={Info}
            setInfo={setInfo}
          />
        </TextFieldContainer>
        <TextFieldContainer>
          <FormControl variant="standard">
            <CustomInputLabel htmlFor="username">닉네임</CustomInputLabel>
            <CustomInput
              id="username"
              onChange={onInfoChange}
              name="username"
            />
          </FormControl>
        </TextFieldContainer>

        <TextFieldContainer>
          <FormControl variant="standard">
            <CustomInputLabel htmlFor="id">아이디</CustomInputLabel>
            <CustomInput
              id="id"
              onChange={(e) => {
                onInfoChange(e);
              }}
              name="id"
            />
          </FormControl>
        </TextFieldContainer>

        <TextFieldContainer>
          <FormControl variant="standard">
            <CustomInputLabel htmlFor="password">비밀번호</CustomInputLabel>
            <CustomInput
              id="password"
              onChange={(e) => {
                onInfoChange(e);
              }}
              value={Info.password}
              name="password"
              type="password"
            />
          </FormControl>
        </TextFieldContainer>

        <TextFieldContainer>
          <FormControl>
            <FormControl variant="standard">
              <CustomInputLabel htmlFor="password2">
                비밀번호 확인
              </CustomInputLabel>
              <CustomInput
                id="password2"
                onChange={(e) => {
                  onInfoChange(e);
                }}
                value={Info.password2}
                name="password2"
                type="password"
              />
            </FormControl>
          </FormControl>
        </TextFieldContainer>

        <TextFieldContainer>
          <Helper
            show={
              Info.password === "" && Info.password2 === "" ? "none" : "block"
            }
          >
            {pwValidation === true
              ? "비밀번호가 일치합니다"
              : "비밀번호가 일치하지 않습니다"}
          </Helper>
        </TextFieldContainer>
        <TextFieldContainer>
          <FormControl variant="standard" sx={{ width: 450 }}>
            <InputLabel>전공</InputLabel>
            <CustomNativeSelect
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Info.major}
              name="major"
              onChange={onInfoChange}
              label="전공"
            >
              <option />
              {majors.map((m) => {
                return (
                  <option
                    name="major"
                    value={m.name || ""}
                    onChange={onInfoChange}
                  >
                    {m.name}
                  </option>
                );
              })}
            </CustomNativeSelect>
          </FormControl>
        </TextFieldContainer>

        <TextFieldContainer>
          <FormControl variant="standard" sx={{ width: 450 }}>
            <InputLabel>부전공</InputLabel>
            <NativeSelect
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Info.subMajor}
              name="subMajor"
              onChange={onInfoChange}
              label="부전공"
            >
              <option />
              {majors.map((m) => {
                return (
                  <option
                    name="subMajor"
                    value={m.name || ""}
                    onChange={onInfoChange}
                  >
                    {m.name}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
        </TextFieldContainer>

        <Additional>추가 입력 사항</Additional>

        <TextFieldContainer>
          <FormControl>
            <FormControl variant="standard">
              <CustomInputLabel htmlFor="emailNotification">
                알림을 받을 이메일
              </CustomInputLabel>
              <CustomInput
                id="emailNotification"
                onChange={onInfoChange}
                value={Info.emailNotification}
                name="emailNotification"
                type="email"
              />
            </FormControl>
          </FormControl>
        </TextFieldContainer>

        <FavClubs>즐겨찾기할 동아리도 추가해야 함....</FavClubs>
      </SignUpPageContainer>
      <SignUpPageFooter>
        <Submit onClick={onClickSubmit}>가입!</Submit>
      </SignUpPageFooter>
    </SignupPageWrapper>
  );
};

const FavClubs = styled.div`
  width: 450px;
  margin: auto;
  background: #000;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
`;
const Submit = styled.button`
  border-style: none;
  border-radius: 2px;
  padding: 12px 72px;
  margin: 20px 0px;
  background-color: #013b6c;
  color: white;
  float: right;
`;
const SignUpPageFooter = styled.div`
  width: 450px;
  margin: auto;
`;
const Additional = styled.div`
  width: 500px;
  margin: auto;
  font-size: 20px;
  padding-top: 20px;
  font-weight: 500;
`;
const Helper = styled.div`
  display: ${(props) => props.show};
  font-size: 12px;
  padding: 0 50px;
  text-align: right;
`;
const TextFieldContainer = styled.div`
  margin: 20px auto;
  width: 500px;
`;
const SignUpPageContainer = styled.div`
  margin: auto;
`;
const SignUpPageHeader = styled.div`
  height: 50px;
  width: 900px;
  font-size: 30px;
  font-weight: 500;
  color: #000;
  text-align: center;
  font-weight: bold;
`;
const SignupPageWrapper = styled.div`
  display: block;
  width: 900px;
  margin: auto;
  margin-top: 40px;
  color: #333333;

  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default SignUpPage;
