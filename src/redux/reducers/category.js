import * as categoryActions from "../actions/category";

const initialStates = {
  category: "전체보기"
};

const reducers = (state = initialStates, action) => {
  const { type } = action;
  switch (type) {
    case categoryActions.SET_CATEGORY: {
      return {
        ...state,
        category: action.category
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
