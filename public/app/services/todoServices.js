angular.module('todoServices', [])

.factory('ToDo', function($http) {
	const todoFactory = {}; // Create the customerFactory object
	let task
    // Register a new task
    todoFactory.createTask = function(data) {
        return $http.post('/task/create/' + data.title + '/' + data.description);
    };

    // Get first 10 tasks
    todoFactory.getFirstTasks = function() {
        return $http.get('/tasks');
    };

    // Get additional tasks
    todoFactory.getMoreTasks = function(lastId) {
        return $http.get('/tasks/' + lastId);
    };

    // Get a task
    todoFactory.getTask = function(id) {
        return $http.get('/task/' + id);
    };

    //Update the task
    todoFactory.updateTask = function(data){
    	return $http.put('/task/update/' + data.id +'/' + data.title + '/' + data.description);
    };

    //Set a task to pass to another route
    todoFactory.setTask = function(data){
    	task = data;
    };

    //Get the task to from setter
    todoFactory.getTask = function(){
    	return task;
    };

    //Reset the task in the setter
    todoFactory.resetTask = function(){
    	task = false;
    };

    // Delete a task
    todoFactory.deleteTask = function(id) {
        return $http.delete('/task/delete/' + id );
    };
return todoFactory; // Return eventFactory object
}) 