import React from 'react';
import './style/LoginPage.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <form className="login-container">
            <h3 className="login-h3">Sign Up</h3>

            <div className="form-group">
                <label className="login-label">First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label className="login-label">Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label className="login-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label className="login-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button>
            <p className="forgot-password text-right">
                Already registered&nbsp;
                <Link className='link' to="/login">
                    sign in?
                </Link>
            </p>
        </form>
    )
};

export default SignUpPage;
