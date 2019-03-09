angular.module('todoServices', [])

.factory('ToDo', function($http) {
	var todoFactory = {}; // Create the customerFactory object

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

    // Delete a task
    todoFactory.deleteTask = function(id) {
        return $http.delete('/task/delete/' + id );
    };
return todoFactory; // Return eventFactory object
}) 