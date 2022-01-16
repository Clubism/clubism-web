import { combineReducers } from "redux";

import category from './category';
import auth from './auth'

const rootReducer = combineReducers({
    category,
    auth
});

export default rootReducer;