import React from 'react';
import './style/LoginPage.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="login-container">
            <form>
                <h3 className="login-h3">Login</h3>

                <div className="form-group">
                    <label className="login-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="login-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label login-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
};

export default LoginPage;
