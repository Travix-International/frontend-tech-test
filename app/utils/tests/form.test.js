import { isInvalid } from '../form';

describe('form', () => {
  describe('isInvalid', () => {
    it('should return false is all keys have data', () => {
      expect(isInvalid({ one: 'one', two: 'two', three: 'three' }, ['one', 'two', 'three'])).toBeFalsy();
    });

    it('should return true is one key has no data', () => {
      expect(isInvalid({ one: 'one', two: '', three: 'three' }, ['one', 'two', 'three'])).toBeTruthy();
    });
  });
});
