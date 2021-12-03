import React from 'react';
import LogoutPage from '../Components/Login/LogoutPage'

const Logout = ({history}) => {
    return (
        <div>
                <LogoutPage history={history}></LogoutPage>
        </div>
    )
}

export default Logout;