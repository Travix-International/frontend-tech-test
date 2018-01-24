import { Map } from 'immutable'
import {
  required,
  length,
  makeValidate,
} from 'utils/formValidations'

describe('formValidations', () => {
  describe('required', () => {
    it('should validate for required input', () => {
      expect(required()('')).not.toEqual(undefined)
      expect(required()(' ')).not.toEqual(undefined)
      expect(required()('Hello')).toEqual(undefined)
    })
  })

  describe('length', () => {
    it('should validate an exact length', () => {
      expect(length({ exact: 3 })('12345')).not.toEqual(undefined)
      expect(length({ exact: 3 })('1')).not.toEqual(undefined)
      expect(length({ exact: 3 })('123')).toEqual(undefined)
    })

    it('should validate a minimum length', () => {
      expect(length({ min: 5 })('1')).not.toEqual(undefined)
      expect(length({ min: 5 })('12345')).toEqual(undefined)
    })

    it('should validate a maximum length', () => {
      expect(length({ max: 5 })('123456')).not.toEqual(undefined)
      expect(length({ max: 5 })('12345')).toEqual(undefined)
    })

    it('should return undefined when no params are passed', () => {
      expect(length({ max: 5 })()).toEqual(undefined)
      expect(length()()).toEqual(undefined)
    })
  })

  describe('makeValidate', () => {
    it('should be able to create a proper validate function', () => {
      const validate = makeValidate({
        test: [required(), length({ exact: 3 })],
      })

      expect(validate(Map({ test: '' })).test).not.toEqual(undefined)
      expect(validate(Map({ test: '1' })).test).not.toEqual(undefined)
      expect(validate(Map({ test: '123' })).test).toEqual(undefined)
    })
  })
})
