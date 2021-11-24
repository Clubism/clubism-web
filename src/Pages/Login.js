import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import LoginPage from '../Components/Login/LoginPage'

const Login = ({history}) => {
    return (
        <div>
            <IndexTemplate>
                <LoginPage history={history}></LoginPage>
            </IndexTemplate>
        </div>
    )
}

export default Login;