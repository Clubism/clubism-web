import * as authActions from "../actions/auth";

const initialStates = {
<<<<<<< HEAD
  isLoggeIn: false,
=======
  isLoggeIn : false,
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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

<<<<<<< HEAD
export default reducers;
=======
export default reducers;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
