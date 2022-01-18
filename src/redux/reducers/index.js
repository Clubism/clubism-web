import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import category from './category';
import auth from './auth'
import currentUser from './currentUser';


const persistConfig = {
  key: "root", // localStorage에 저장
  storage, //reducer 중에 currentUser reducer만 localstorage에 저장합니다.
  whitelist: ["currentUser"]
};

const rootReducer = combineReducers({
    category,
    auth,
    currentUser
});

export default persistReducer(persistConfig, rootReducer);