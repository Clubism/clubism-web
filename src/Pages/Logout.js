import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import LogoutPage from '../Components/Login/LogoutPage'

const Logout = ({history}) => {
    return (
        <div>
            <IndexTemplate>
                <LogoutPage history={history}></LogoutPage>
            </IndexTemplate>
        </div>
    )
}

export default Logout;