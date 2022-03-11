import { ADD_CATEGORY, SEARCH_ITEM } from "../actions/types";

const initialState = {
  categoryList: ['TechCrunch', 'Business', 'Wall Street Journal'],
  searchItem: '',
}

export default function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CATEGORY : 
    return {
      ...state,
      categoryList: [...state.categoryList, payload.name]
    }
    case SEARCH_ITEM : 
    console.log(payload, 'payload');
      return {
        ...state,
        searchItem: payload
      }
    default:
      return state;
  }
}