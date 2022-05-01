const initialState = {
  counter: 0,
  contact: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, counter: action.payload };
    }
    case "DECREASE": {
      return { ...state, counter: action.payload };
    }
    case "ADDCONTACT": {
      return { ...state, contact: action.payload };
    }
    default:
      return state;
  }
};

export default counterReducer;
