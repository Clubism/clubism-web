import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const PrivateInfo = () => {
  // token 인증 받는 코드
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:4000/auth/test",
        {},
        {
          headers: { Authorization: token }
        }
      )
      .then((res) => {});
  }, []);

  var [majors, setMajors] = useState([]);
  const [Info, SetInfo] = useState({}); // Info : db에서 찾아온 user 정보
  const [Form, setForm] = useState({
    // Form : 프론트 단에서 사용자에 의해 작성되는 폼
    id: "",
    password: "",
    password2: "",
    username: "",
    major: "",
    subMajor: ""
  });

  // local storage에서 사용자 정보를 찾아옴
  const dbId = localStorage.getItem("user_id");

  // 전공 정보를 dummy에서 가져옴
  useEffect(() => {
    axios.get("../../dummy/departments.json").then((res) => {
      setMajors(res.data);
    });
  }, []);

  // local storage에서 찾은 정보를 바탕으로 db에서 해당 사용자 정보를 찾아옴
  useEffect(() => {
    axios.get(`http://localhost:4000/auth/checkId?id=${dbId}`).then((res) => {
      SetInfo(res.data);
    });
  }, [dbId]);

  // 바뀔 가능성이 적은 필드는 Form에 미리 저장해 둠

  /*
  useEffect(() => {
    setForm({
      ...Form,
      id: Info.id,
      username: Info.username,
      major: Info.major
    });
  }, [Info]);
*/
  const onFormChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };

  return (
    <PrivateInfoWrapper>
      <PrivateInfoHeader>개인 정보 수정</PrivateInfoHeader>
      <div style={{ margin: "1.6rem 0" }} />
      <PrivateInfoContainer>
        <InputContainer>
          <Label htmlFor="username">이름</Label>
          <Input
            name="username"
            placeholder={Info.username}
            onChange={(e) => onFormChange(e)}
          />
          <Line />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="id">id</Label>
          <Input name="id" value={Info.id || ""} disabled />
          <Line />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => onFormChange(e)}
          />
          <Line />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password2">비밀번호 확인</Label>
          <Input
            type="password"
            name="password2"
            onChange={(e) => onFormChange(e)}
          />
          <PwMsg
            show={
              Form.password === "" && Form.password2 === ""
                ? "none"
                : "inline-block"
            }
          >
            {Form.password === Form.password2
              ? "비밀번호가 일치합니다"
              : "비밀번호가 일치하지 않습니다"}
          </PwMsg>
          <Line />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="major">전공</Label>
          <Input type="text" name="major" value={Info.major} disabled />
          <Line />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="submajor">부전공</Label>
          {Info.subMajor === undefined ? (
            <Select>
              <option value="">부전공을 선택하세요</option>
              {majors.map((m) => {
                return (
                  <option
                    name="subMajor"
                    value={m.label || ""}
                    onChange={(e) => onFormChange(e)}
                    key={uuidv4()}
                  >
                    {m.name}
                  </option>
                );
              })}
            </Select>
          ) : (
            <Input
              type="text"
              name="major"
              value={Info.subMajor || ""}
              disabled
            />
          )}

          <Line />
        </InputContainer>

        <InputContainer>
          <CheckBoxLbel htmlFor="notification">
            가입한 이메일로 알람 및 소식을 받겠습니다
            <CheckBox type="checkbox" name="notification" />
          </CheckBoxLbel>
          <Line />
        </InputContainer>

        <PrivateInfoFooter>
          <Submit>확인</Submit>
          <Cancel>취소</Cancel>
        </PrivateInfoFooter>
      </PrivateInfoContainer>
    </PrivateInfoWrapper>
  );
};

const PwMsg = styled.div`
  display: ${(props) => props.show};
  font-size: 12px;
  margin-left: 20px;
`;

const Line = styled.hr`
  color: #8f8f8f;
  margin: 0.8rem 0;
`;

const PrivateInfoWrapper = styled.div`
  display: block;
  width: 900px;
  margin: auto;
  margin-top: 40px;
  color: #333333;
  padding: 0px 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  //border : solid;
  //border-radius : 4px;
  //border-color : #dadada;
  //border-width : thin;
`;

const PrivateInfoHeader = styled.div`
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

const PrivateInfoContainer = styled.div`
  font-size: 14px;
  display: block;
  color: #2e2e2e;
`;

const InputContainer = styled.div``;

const Label = styled.label`
  font-size: 14px;
  width: 150px;
  color: #222222;
`;

const Input = styled.input`
  display: inline-block;
  font-size: 14px;
  padding: 5px 10px;
  width: 200px;
  border-color: #dadada;
  border-width: thin;
  border-radius: 4px;
  border-style: solid;
`;

const PrivateInfoFooter = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  padding: 20px 0px;
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

const CheckBoxLbel = styled.label`
  font-size: 14px;
`;
const CheckBox = styled.input`
  width: 100px;
`;

const Select = styled.select`
  padding: 5px 10px;
  width: 200px;
`;

export default PrivateInfo;
