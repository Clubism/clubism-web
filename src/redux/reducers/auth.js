import * as authActions from "../actions/auth";

const initialStates = {
  isLoggeIn : false,
};

const reducers = (state = initialStates, action) => {
  const { type } = action;
  switch (type) {
    case authActions.SET_AUTH: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
