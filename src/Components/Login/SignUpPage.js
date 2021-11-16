import React from "react";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SignUpPage = () => {
  return (
    <div className="login-container">
      <Form>
        <h3 className="login-h3">Sign Up</h3>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="name" placeholder="sogang" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="sogang" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
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
        <Button variant="primary" type="submit">
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
