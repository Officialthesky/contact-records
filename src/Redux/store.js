import { combineReducers, createStore } from "redux";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  contactReducer,
});

export const store = createStore(rootReducer);
