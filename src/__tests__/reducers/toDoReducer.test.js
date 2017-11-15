import reducer from '../../reducers/toDoReducer';

describe('ToDo Reduce', () => {
  it('Has a default state', () => {
    expect(reducer(undefined, {type: 'anything'})).toEqual({
      added: false,
      adding: false,
      erased: false,
      erasing: false,
      errorAdding: null,
      errorErasing: null,
      errorRetriving: null,
      errorUpdating: null,
      fetched: false,
      fetching: false,
      tasks: [],
      updated: false,
      updating: false,
    });
  })

  it('Adding TODO Taks', () =>{
    expect(reducer(undefined , {
      type: "ADD_TASK_FULFILLED", 
      payload: {
        data: {
          task:{
            id: 1,
            title: "Test Task",
            description: "Used for testing only"
        }}}})).toEqual({
        adding: false,
        added: true,
        erased: false,
        erasing: false,
        errorAdding: null,
        errorErasing: null,
        errorRetriving: null,
        errorUpdating: null,
        fetched: false,
        fetching: false,
        tasks: [{
          id: 1,
          title: "Test Task",
          description: "Used for testing only"
        }],
        updated: false,
        updating: false
    });
  })

  it("Fetching task", () => {
    expect(reducer(
      {
        tasks: [],
        fetching: false,
        fetched: false,
        adding: false,
        added: false,
        updating: false,
        updated: false,
        erasing: false,
        erased: false,
        errorErasing: null,
        errorAdding: null,
        errorRetriving: null,
        errorUpdating: null
      }, {
        type: "FETCH_TASKS_FULFILLED",
        payload: {
          data: {
            tasks:[{
              id: 1,
              title: "Test Task",
              description: "Used for testing only"
          }]}}}
    )).toEqual({
      adding: false,
      added: false,
      erased: false,
      erasing: false,
      errorAdding: null,
      errorErasing: null,
      errorRetriving: null,
      errorUpdating: null,
      fetched: true,
      fetching: false,
      tasks: [{
        id: 1,
        title: "Test Task",
        description: "Used for testing only"
      }],
      updated: false,
      updating: false
    });
  })
})