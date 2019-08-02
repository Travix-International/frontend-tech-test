import API from './API';

describe('API Class', () => {
  it('Test createBaseUrl', () => {
    expect(API.createBaseUrl('http://blacksrc.com', 3000, 1)).toEqual('http://blacksrc.com:3000/v1/');
    expect(API.createBaseUrl('http://blacksrc.com', 3000)).toEqual('http://blacksrc.com:3000/');
    expect(API.createBaseUrl('http://blacksrc.com')).toEqual('http://blacksrc.com:80/');
    expect(API.createBaseUrl('http://blacksrc.com')).toEqual('http://blacksrc.com:80/');
    expect(API.createBaseUrl()).toEqual('http://localhost:80/');
  });
});
