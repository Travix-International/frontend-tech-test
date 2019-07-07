## Server improvements

- add 400 checking middleware. If passed task ID is invalid return 400 status code.
- add 404 checking middleware. Task is needed by some methods (GET, PUT, DELETE), to reduce repeated code `checkExistence` middleware is added. It tries to find task by ID, and if it doesn't - 404 status code is returned.
- change handlers URLs to follow REST-spec. Method names (PUT, DELETE) are self describing, it doesn't required to repeat them into the URL.
