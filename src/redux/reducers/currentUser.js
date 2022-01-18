import * as currentUserActions from "../actions/currentUser";
import isEmpty from 'lodash.isempty';

const initialStates = {
  isAuthenticated: false,
  user: {}
};

const reducers = (state = initialStates, action) => {
  const { type } = action;
  switch (type) {
    case currentUserActions.SET_CURRENT_USER: {
      console.log("test action", action);
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
