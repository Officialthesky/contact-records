const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, counter: action.payload };
    }
    case "DECREASE": {
      return { ...state, counter: action.payload };
    }
    default:
      return state;
  }
};

export default counterReducer;
