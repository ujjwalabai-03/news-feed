import { ADD_CATEGORY, SEARCH_ITEM } from "./types";

export const addCategory = (newCategory) => async dispatch => {
  dispatch({type: ADD_CATEGORY, payload: newCategory});
};
export const updateSearchItem = (searchItem) => async dispatch => {
  dispatch({type: SEARCH_ITEM, payload: searchItem});
};

