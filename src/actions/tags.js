import {
  SET_TAG,
  UNSET_TAG,
  CLEAR_TAGS
} from '../constants/actions.js';

export function setTag(tag) {
  return { type: SET_TAG, payload: tag };
}

export function unsetTag(tag) {
  return { type: UNSET_TAG, payload: tag };
}

export function clearTags() {
  return { type: CLEAR_TAGS };
}