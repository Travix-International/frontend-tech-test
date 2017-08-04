/* eslint-disable */
import { combineEpics } from 'redux-observable';
import { fetchTodos } from './todosCRUD'

export default combineEpics(
  fetchTodos,
)
