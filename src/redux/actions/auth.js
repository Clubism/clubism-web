export const SET_AUTH = 'SET_AUTHT';

export const setAuth = (_isLoggedIn) => {
    return {
        type: SET_AUTH,
        isLoggedIn : _isLoggedIn
    }
};