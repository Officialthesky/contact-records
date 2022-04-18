import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

export const store = createStore(rootReducer);
