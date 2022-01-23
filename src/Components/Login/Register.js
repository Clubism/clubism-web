import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/LoginPage.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import className from "classnames"; 


const Register = () => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwd2, setPwd2] = useState("")
  const [name, setName] = useState("")

  const onChangeName = (event)=>{
    setName(event.currentTarget.value);
  }

  const onChangeEmail = (event)=>{
    setEmail(event.currentTarget.value);
  }

  const onChangePwd = (event)=>{
    setPwd(event.currentTarget.value);
  }

  const onChangePwd2 = (event)=>{
    setPwd2(event.currentTarget.value);
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
        console.log('Email', email)
        console.log('Password', pwd)
        console.log('Password2', pwd2)
        console.log('Name', name)

        
  }

  return (
    <div className="login-container" onSubmit={onSubmitHandler}>
      <Form>
        <h3 className="login-h3">Sign Up</h3>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="name" placeholder="sogang" onChange={onChangeName}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="sogang" onChange={onChangeEmail}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="sogang" onChange={onChangePwd}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="confirm password" placeholder="sogang" onChange={onChangePwd2}/>
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

export default Register;
