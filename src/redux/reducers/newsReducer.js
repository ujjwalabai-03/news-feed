import { FETCH_NEWS, ERROR } from '../actions/types'

const initialState = {
  newsList: [],
  errorMsg: ""
}

export default function newReducers(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsList: payload
      }
    case ERROR:
      return {
        ...state,
        errorMsg: payload
      }
    default:
      return state
  }
}