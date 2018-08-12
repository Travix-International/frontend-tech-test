import * as actions from './constants';

// GET ALL ITEMS
export const getItems = () => ({
  type: actions.GET_ITEMS
});
export const getItemsSuccess = data => ({
  type: actions.GET_ITEMS_SUCCESS,
  data
});
export const getItemsFail = error => ({
  type: actions.GET_ITEMS_FAIL,
  error
});

// GET SINGLE ITEM
export const getItem = id => ({
  type: actions.GET_ITEM,
  id
});
export const getItemSuccess = data => ({
  type: actions.GET_ITEM_SUCCESS,
  data
});
export const getItemFail = error => ({
  type: actions.GET_ITEM_FAIL,
  error
});

// DELETE ITEM
export const deleteItem = id => ({
  type: actions.DELETE_ITEM,
  id
});
export const deleteItemSuccess = id => ({
  type: actions.DELETE_ITEM_SUCCESS,
  id
});
export const deleteItemFail = error => ({
  type: actions.DELETE_ITEM_FAIL,
  error
});

// CREATE ITEM
export const createItem = data => ({
  type: actions.CREATE_ITEM,
  data
});
export const createItemSuccess = data => ({
  type: actions.CREATE_ITEM_SUCCESS,
  data
});
export const createItemFail = error => ({
  type: actions.CREATE_ITEM_FAIL,
  error
});

// EDIT ITEM
export const editItem = data => ({
  type: actions.EDIT_ITEM,
  data
});
export const editItemSuccess = data => ({
  type: actions.EDIT_ITEM_SUCCESS,
  data
});
export const editItemFail = error => ({
  type: actions.EDIT_ITEM_FAIL,
  error
});