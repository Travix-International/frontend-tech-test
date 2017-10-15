# install

1. clone the repo
2. npm install
3. npm start

It will automatically start the Backend(BE) and Frontend application (FE) as well.<br>
(Small start script added to the root package.json for convenience)

FE port 3000
BE port: 9001

# usage and features

- The user can see his/her tasks in a list, if there is any task.<br>
- By default there is no tasks in the list. <br>
- User can add tasks, update/change the existing tasks and delete them.<br>
- Add task functionality available by clicking the add task button on the screen.<br>
- Update and delete task functionality is available by clicking on the change/delete icon
next the task in the list.
- clicking to add/update task button should open a modal window, with the related data in case of update<br>
- modal can be closed by clicking X icon or outside the modal.
- task will be add by clicking on add/update button in the modal window (if every fields are filled)

# short description regarding to the application folder structure and config

 - client: FE application under client:
	 - component: all components here. In a bigger application it useful to seperate
	 smart/container components from only representational components.
	 - actions: actionTypes- actionType constants, tasks - task related actions
	 - reducers: index - reducer entry, tasks - task related reducers
	 - style: every style related file here (scss, img).
	 - __test__ unit tests
 - test folder in root: contains server related unit tests

# style

	 Common style files: lowercase (reset, colors, mixins). <br>
	 In a bigger application it would be useful to seperate more the style related files and use more mixins.<br>
	 Component related style - uppercase, same name as the related component
	 every related css property is under a 'block class'(same name as components itself, uppercase, every other css class use lowercase classes.)<br>

 I added sass-loader to the default webpack-config (the reason to npm eject needed).
 Client use "http://localhost:9001/" as BE proxy in local environment (See package.json under client).

 The application is responsive. With a bit different layout on smaller screens for convenience (See modal under 768px). I used the same breakpoints as Bootstrap for simplify dev process.

 Please note style and responsivity can more refined it is only a prototype application.

# test

 - I wrote some unit test. Please note I tried to add some example on different kind of unit tests. So I did not pay attention too much on test coverage.

- simple react component test: TaskForm -> TaskForm.test<br>
- redux action test: actions/tasks -> tasks.actions.test<br>
- redux reducer test: tasks -> tasks.reduer.test<br>

<b>Running unit tests UI</b>

- <b>npm test</b> <br>
(under client folder!)<br>

<b>Running unit tests Server</b>
- <b>npm run server-test</b>
(under root folder)<br>

# Additional notes

I used create-react-app as boilerplate.<br>
Possible future development plan:
- handling errors from API !!!!
- add error messages !!!
- add more tests
- polish style
