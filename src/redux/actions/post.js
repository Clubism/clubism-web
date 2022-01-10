export const SET_POST = 'SET_POST';

export const setPost = (_id) => {
    return {
        type: SET_POST,
        id : _id
    }
};