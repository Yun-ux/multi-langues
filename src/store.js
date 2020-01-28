import { createStore, combineReducers } from "redux";
import langReducer from "./langReducer";

const store = createStore(
  combineReducers({
    langReducer: langReducer,
    moodReducer: reducer
  })
);
//combineReducers pour importer plusieurs reducer,
export default store;
