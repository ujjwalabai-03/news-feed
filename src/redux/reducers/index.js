import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import newsReducers from "./newsReducer";
export default combineReducers({ category: categoryReducer, news: newsReducers });