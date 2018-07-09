import {
  setTag,
  unsetTag,
  clearTags
} from '../../src/actions/tags.js';
import {
  SET_TAG,
  UNSET_TAG,
  CLEAR_TAGS
} from '../../src/constants/actions.js';

describe('Tags actions', () => {
  it('Set tag', () => {
    const tagMock = 'test';

    const expected = {
      type: SET_TAG,
      payload: tagMock
    };

    expect(setTag(tagMock)).toEqual(expected);
  });

  it('Unset tag', () => {
    const tagMock = 'test';

    const expected = {
      type: UNSET_TAG,
      payload: tagMock
    };

    expect(unsetTag(tagMock)).toEqual(expected);
  });

  it('Remove all tags', () => {
    const expected = {
      type: CLEAR_TAGS
    };

    expect(clearTags()).toEqual(expected);
  });
});