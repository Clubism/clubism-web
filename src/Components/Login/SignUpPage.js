import React, { useState } from "react";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const SignUpPage = () => {
  const [info, setInfo] = useState({ username: "", id: "", password: "" });
  const onSignChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const onButtonSubmit = () => {
    console.log("here");
    setTimeout(5000);

    axios.post("http://localhost:4000/auth/join", info)
    .then(() => {
      console.log("successs");
    }).catch((err)=>{
      console.log(err)
    });
  };
  return (
    <div className="login-container">
      <Form>
        <h3 className="login-h3">Sign Up</h3>
        <FloatingLabel
          controlId="floatingInput"
          name="username"
          label="Name"
          className="mb-3"
          onChange={onSignChange}
        >
          <Form.Control type="name" placeholder="sogang" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          name="id"
          label="Email"
          className="mb-3"
          onChange={onSignChange}
        >
          <Form.Control type="email" placeholder="sogang" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
          name="password"
          onChange={onSignChange}
        >
          <Form.Control type="password" placeholder="sogang" />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="login-label"
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onButtonSubmit}>
          Sign Up
        </Button>
        <p className="forgot-password text-right">
          Already registered?&nbsp;
          <Link className="link" to="/login">
            sign in
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpPage;