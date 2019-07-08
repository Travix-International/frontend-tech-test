## Server improvements

- add 400 checking middleware. If passed task ID is invalid return 400 status code.
- add 404 checking middleware. Task is needed by some methods (GET, PUT, DELETE), to reduce repeated code `checkExistence` middleware is added. It tries to find task by ID, and if it doesn't - 404 status code is returned.
- change handlers URLs to follow REST-spec. Method names (PUT, DELETE) are self describing, it doesn't required to repeat them into the URL.
- change tasks store data structure from a list to a map. Because of huge-huge lists of tasks an operation on task could take a lot of time, finding an item in the array is `O(n)`. That's why the list is changed to the map (item finding time is `O(1)`). It seems to be a huge improvement.
- add `checkTitle` middleware to check passed params in
  request body. If there is no `title` param (which is required I belive) then 400 status code is returned.
- change response status codes and response body due to the REST.
