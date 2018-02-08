import { actionTypes as at } from './constants';

export const fetch = () => ({
  type: at.FETCH
});

export const fetchSuccess = ({ data }) => ({
  type: at.FETCH_SUCCESS,
  payload: { data }
});

export const fetchError = ({ error }) => ({
  type: at.FETCH_ERROR,
  payload: { error }
});

export const update = ({ id, description, title, index }) => ({
  type: at.UPDATE,
  payload: {
    id,
    description,
    title,
    index
  }
});

export const updateSuccess = ({ data, index }) => ({
  type: at.UPDATE_SUCCESS,
  payload: { data, index }
});

export const updateError = ({ id, index }) => ({
  type: at.UPDATE_ERROR,
  payload: { id, index }
});

export const remove = ({ id, index }) => ({
  type: at.REMOVE,
  payload: { id, index }
});

export const removeSuccess = ({ data, index }) => ({
  type: at.REMOVE_SUCCESS,
  payload: { data, index }
});

export const removeError = ({ id, index }) => ({
  type: at.REMOVE_ERROR,
  payload: { id, index }
});
