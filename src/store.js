import { createStore } from "redux";
import langReducer from "./langReducer";

const store = createStore(langReducer);

export default store;
