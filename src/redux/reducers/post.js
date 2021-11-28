import * as postActions from '../actions/post';

const initialStates = {
    id : 1
}

const reducers = (state = initialStates, action) => {
    const {type} = action;
    switch(type){
        case postActions.SET_POST:{
            return{
                ...state,
                id: action._id
            }
        }
        default:{
            return state;
        }
    }
}

export default reducers;