angular.module('todoServices', [])

.factory('ToDo', function($http) {
	const todoFactory = {}; // Create the customerFactory object
	let task
    // Register a new todo
    todoFactory.createTask = function(data) {
        return $http.post('/task/create/' + data.title + '/' + data.description);
    };

    // Get all todo tasks
    todoFactory.getAllTasks = function() {
        return $http.get('/tasks');
    };

    // Get atodo task
    todoFactory.getTask = function(id) {
        return $http.get('/task/' + id);
    };

    //update the task
    todoFactory.updateTask = function(data){
    	return $http.put('/task/update/' + data.id +'/' + data.title + '/' + data.description);
    };

    //set a task to pass to another route
    todoFactory.setTask = function(data){
    	task = data;
    };

    //get the task to from setter
    todoFactory.getTask = function(){
    	return task;
    };

    //reset the task in the setter
    todoFactory.resetTask = function(){
    	task = false;
    };

    // Delete a task
    todoFactory.deleteTask = function(id) {
        return $http.delete('/task/delete/' + id );
    };
return todoFactory; // Return eventFactory object
}) 