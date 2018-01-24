import {
  domain,
  ERROR,
  PENDING,
  SUCCESS,
} from 'redux/constants'

describe('constants', () => {
  it('should export global "status" constants', () => {
    expect(ERROR).toEqual('ERROR')
    expect(PENDING).toEqual('PENDING')
    expect(SUCCESS).toEqual('SUCCESS')
  })

  it('should export a global domain action definition', () => {
    expect(domain.ACTION).toEqual('janus')
  })
})
