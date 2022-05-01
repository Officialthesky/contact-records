import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  contactReducer,
});

export const store = createStore(rootReducer);
