import React, { useEffect, useState } from "react";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const SignUpPage = () => {
  const [Info, setInfo] = useState({ username: "", id: "", password: "", password2 : "" });
  const [pwValidation, setPwValidation] = useState(false);
  const onSignChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };
  const onButtonSubmit = (e) => {
    e.preventDefault();

    // 이름 필드가 빈 경우
    if(Info.username === ''){
      alert('이름을 입력해 주세요');
      return ;
    }
    if(Info.id === ''){
      alert('id를 입력해 주세요');
      return;
    }
    if(Info.password ==='' || Info.password2 === ''){
      alert('비밀번호를 입력해 주세요');
      return;
  }
    // 비밀번호가 일치하지 않는 경우
    if(pwValidation===false){
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    // id 중복 체크
    axios.get(`http://localhost:4000/auth/checkId?id=${Info.id}`)
    .then((res)=>{
      if(res.data !== null){
        alert('이미 존재하는 id입니다');
        return;
      }
    })
    .catch((err)=>{
      console.log(err);
    });

    console.log(Info);
    axios
      .post("http://localhost:4000/auth/join", Info, { withCredentials: true })
      .then(() => {
        console.log("successs");
        setInfo({ username: "", id: "", password: "", password2 : "" });
        //e.target.username.value = ""
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 비밀번호 유효성 체크
  useEffect(()=>{
    setPwValidation(Info.password === Info.password2);
  }, [Info.password, Info.password2])
  return (
    <div className="login-container">
      <Form onSubmit={onButtonSubmit}>
        <h3 className="login-h3">Sign Up</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
          value={Info.username}
          
        >
          <Form.Control
            type="name"
            placeholder="sogang"
            as="input"
            name="username"
            onChange={(e) => onSignChange(e)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
          value={Info.id}
          
        >
          <Form.Control
            type="email"
            placeholder="sogang"
            as="input"
            name="id"
            onChange={(e) => onSignChange(e)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
          value={Info.password}
        >
          <Form.Control
            type="password"
            placeholder="sogang"
            as="input"
            name="password"
            onChange={(e) => {
              onSignChange(e)
            }}
            isValid = {Info.password === Info.password2}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password Confirm"
          className="mb-3"
          value={Info.password2}
        >
          <Form.Control
            type="password"
            placeholder="sogang"
            as="input"
            name="password2"
            onChange={(e) => {
              onSignChange(e)
              
            }}
          />
        </FloatingLabel>
        <div className='pw-validation'>{pwValidation===true ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}</div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="login-label"
            type="checkbox"k
            label="Remember me"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => onButtonSubmit(e)}
        >
          Sign Up
        </Button>
        <div style={{ backgroundColor: "blue" }} onClick={onButtonSubmit}>
          check test
        </div>
        <p className="forgot-password text-right">
          Already registered&nbsp;
          <Link className="link" to="/login">
            sign in?
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpPage;
