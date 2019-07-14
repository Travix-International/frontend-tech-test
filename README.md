## Server improvements

- add 400 checking middleware. If passed task ID is invalid return 400 status code.
- add 404 checking middleware. Task is needed by some methods (GET, PUT, DELETE), to reduce repeated code `checkExistence` middleware is added. It tries to find task by ID, and if it doesn't - 404 status code is returned.
- change handlers URLs to follow REST-spec. Method names (PUT, DELETE) are self describing, it doesn't required to repeat them into the URL.
- change tasks store data structure from a list to a map. Because of huge-huge lists of tasks an operation on task could take a lot of time, finding an item in the array is `O(n)`. That's why the list is changed to the map (item finding time is `O(1)`). It seems to be a huge improvement.
- add `checkTitle` middleware to check passed params in
  request body. If there is no `title` param (which is required I belive) then 400 status code is returned.
- change response status codes and response body due to the REST.

## Writing tests

- add unit tests for the tasks reducer (client side)
- add integration tests for the Drawer and TasksList components.

## Socket

- add socket connection between the client and the server
- add broadcasting events about creation, changing and removing test
- subscribe to the socket events and respond correctly by changin the client state

## Responsiveness

- add breakpoints sass-mixin
- add masonry-like view of tasks at devices with min width > 768px

### Tradeoffs

- I know that it should be a mock server to test API calls, but for simplicity I've decided to keep my main server for that purpose.
- I've added only one test for the server side just to show how it works
- there should be a filtering function to remove self-sended socket events. Eg. when the client is changing the task it will register `external-change` event as well. So, it should be a client ID into the socket event and the client should filter self-maded events.
- the desktop view maybe not so ux-friendly, I've just shown a way to create responsive layouts
