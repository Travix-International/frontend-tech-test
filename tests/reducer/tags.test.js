import tags from '../../src/reducer/tags.js';
import {
  SET_TAG,
  UNSET_TAG,
  CLEAR_TAGS
} from '../../src/constants/actions.js';

describe('Tags reducer', () => {
  it('Set tag', () => {
    const tagMock = 'another';

    const expected = ['test', tagMock];

    expect(
      tags(['test'], {
        type: SET_TAG,
        payload: tagMock
      })
    ).toEqual(expected);
  });

  it('Unset tag', () => {
    const tagMock = 'test';

    expect(
      tags([tagMock, 'another'], {
        type: UNSET_TAG,
        payload: tagMock
      })
    ).toEqual(['another']);
  });

  it('Remove all tags', () => {

    expect(
      tags(['test', 'another'], {
        type: CLEAR_TAGS
      })
    ).toEqual([]);
  });
});