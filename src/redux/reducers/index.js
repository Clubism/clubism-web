import { combineReducers } from "redux";

import category from './category';
import post from './post'
import auth from './auth'

const rootReducer = combineReducers({
    category,
    post,
    auth,
});

export default rootReducer;