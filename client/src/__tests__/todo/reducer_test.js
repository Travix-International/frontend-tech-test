import ToDo, { INIT_STATE } from '../../reducers/ToDo';

describe('ToDo Reducer', () => {

  it('Should return the initial state', () => {
    expect(ToDo(undefined, {})).toMatchSnapshot();
  });

  it('Should handle ON_TODO_ADD', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'ON_TODO_ADD',
        }),
    ).toMatchSnapshot();
  });

  it('Should handle GET_ALL_TODO', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'GET_ALL_TODO',
        }),
    ).toMatchSnapshot();
  });

  it('Should handle ON_TODO_UPDATE_SUCCESS', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'ON_TODO_UPDATE_SUCCESS',
        }),
    ).toMatchSnapshot();
  });

  it('Should handle DELETE_TODO_SUCCESS', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'DELETE_TODO_SUCCESS',
        }),
    ).toMatchSnapshot();
  });

  it('Should handle FETCH_ALL_TODO_SUCCESS', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'FETCH_ALL_TODO_SUCCESS',
        }),
    ).toMatchSnapshot();
  });

  it('Should handle INSERT_TODO_SUCCESS', () => {
    expect(
      ToDo(INIT_STATE,
        {
          type: 'INSERT_TODO_SUCCESS',
        }),
    ).toMatchSnapshot();
  });

});
