const initialState = {
  contact: [],
  updateContact: {},
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDCONTACT": {
      return { ...state, contact: action.payload };
    }
    case "UPDATE_CONTACT": {
      return { ...state, updateContact: action.payload };
    }

    default:
      return state;
  }
};

export default contactReducer;
