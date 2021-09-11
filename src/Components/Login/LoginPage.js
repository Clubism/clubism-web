import React from 'react';
import '../style/LoginPage.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const LoginPage = () => {
    return (
        <div className="login-container">
            <Form>
                <h3 className="login-h3">Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="login-label">Email address</Form.Label>
                    <Form.Control className="form-control" type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="login-label">Password</Form.Label>
                    <Form.Control className="form-control" type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="login-label" type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
        </div>
    )
};

export default LoginPage;
