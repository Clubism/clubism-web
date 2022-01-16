import React from 'react';
import LoginPage from '../Components/Login/LoginPage'

const Login = ({history}) => {
    return (
        <div>
                <LoginPage history={history}></LoginPage>
        </div>
    )
}

export default Login;