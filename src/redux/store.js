import { createStore } from "redux";
import todoReducer from "./reducer/todoReducer";

let store = createStore(todoReducer);

export default store;
