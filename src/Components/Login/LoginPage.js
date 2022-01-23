import React, { useState } from "react";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
import axios from "axios";

const LoginPage = ({ history }) => {
=======
import { useDispatch } from "react-redux";
import axios from "../../Assets/axios";

import * as actions from "../../redux/actions/auth";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();

>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
  const [LoginInfo, setLoginInfo] = useState({ id: "", password: "" });

  const onLoginChange = (e) => {
    setLoginInfo({ ...LoginInfo, [e.target.name]: e.target.value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log("called");
    axios
      .post("/auth/login", LoginInfo, {
        withCredentials: true
      })
      .then((res) => {
        console.log("login res below");
        console.log(res);
        if (res.data === "no such user") {
          alert("등록된 회원 정보가 없습니다");
        } else if (res.data === "wrong password") {
          alert("비밀번호를 확인해주세요");
        } else {
          localStorage.setItem("user_id", res.data.user.id);
          localStorage.setItem("user_db_id", res.data.user._id);
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refershToken);


<<<<<<< HEAD
    axios
      .post("http://localhost:4000/auth/login", LoginInfo, {
        withCredentials: true
      })
      .then((res) => {
        if (res.data === "no such user") {
          alert("등록된 회원 정보가 없습니다");
        } else if (res.data === "wrong password") {
          alert("비밀번호를 확인해주세요");
        } else {
          localStorage.setItem("user_id", res.data.id);
          history.push("/");
=======
          dispatch(actions.setAuth(true));
          window.location.replace("/");
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
        }
      });
  };

  return (
    <div className="login-container">
      <Form onSubmit={onLoginSubmit}>
        <h3 className="login-h3">Login</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-label">Email address</Form.Label>
          <Form.Control
            className="form-control"
<<<<<<< HEAD
            type="email"
=======
            type="text"
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
            placeholder="Enter email"
            as="input"
            name="id"
            onChange={(e) => onLoginChange(e)}
          />
          {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control
            className="form-control"
            type="password"
            placeholder="Enter password"
            as="input"
            name="password"
            onChange={(e) => onLoginChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="login-label"
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <p className="forgot-password text-right">
          Forgot <Link to="#">password?</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
