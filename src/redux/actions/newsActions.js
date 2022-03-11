import { FETCH_NEWS, ERROR } from './types'
import HttpService from '../../services/httpService'

export const fetchNews = (query) => async dispatch => {
  try {
    const response = await HttpService.fetchNews(query)
    dispatch({ type: FETCH_NEWS, payload: response?.data?.articles })
  } catch (error) {
    console.log(error)
    dispatch({ type: ERROR, payload: error })
  }
};