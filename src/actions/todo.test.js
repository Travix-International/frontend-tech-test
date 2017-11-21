import * as todoAction from './todo';


describe('actions', function() {
  describe('GET_TODOS_SUCCESS', function() {
    it('should create an action to get todos', () => {
      const payload = [{
        id: 0,
        title: "todo title",
        description: 'todo description',
        isDone: false
      },
        {
          id: 1,
          title: "todo title2",
          description: 'todo description2',
          isDone: true
        }];

      const expectedAction = {
        type: todoAction.GET_TODOS_SUCCESS,
        payload
      };

      expect(todoAction.GetTodosSuccess(payload)).toEqual(expectedAction)

    })
  });
});