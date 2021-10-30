import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import LoginPage from '../Components/Login/LoginPage'

const Login = () => {
    return (
        <div>
            <IndexTemplate>
                <LoginPage></LoginPage>
            </IndexTemplate>
        </div>
    )
}

export default Login;