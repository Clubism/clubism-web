import React, { useState } from "react";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const SignUpPage = () => {
  const [Info, setInfo] = useState({ username: "", id: "", password: "" });
  const onSignChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
  };
  const onButtonSubmit = (e) => {
    e.preventDefault();
    console.log(Info);
    axios
      .post("http://localhost:4000/auth/join", Info)
      .then(() => {
        console.log("successs");
        setInfo({ username: "", id: "", password: "" });
        e.target.username.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      <Form onSubmit={onButtonSubmit}>
        <h3 className="login-h3">Sign Up</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
          value={Info.username}
          onChange={(e) => onSignChange(e)}
        >
          <Form.Control
            type="name"
            placeholder="sogang"
            as="input"
            name="username"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
          value={Info.id}
          onChange={(e) => onSignChange(e)}
        >
          <Form.Control
            type="email"
            placeholder="sogang"
            as="input"
            name="id"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
          value={Info.password}
          onChange={(e) => onSignChange(e)}
        >
          <Form.Control
            type="password"
            placeholder="sogang"
            as="input"
            name="password"
          />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="login-label"
            type="checkbox"
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
