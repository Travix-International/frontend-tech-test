angular.module('todoController', ['todoServices'])
.controller('todoCtrl', function($http, $location, $route, $timeout,$scope, $log, $routeParams, ToDo) {
	var app = this;
	$scope.tasks = []
	$scope.newFormOpen = false;

	function getAllTasks(){
		ToDo.getAllTasks().then((data)=>{
			console.log(data);
			if(data.data.success){
				$scope.tasks = data.data.tasks;
			}
		})
	}

	getAllTasks();

	this.createTask = function(todo){
		console.log(todo)
		if((!todo) || (!todo.title || !todo.description)){
			$scope.error = 'Please complete the fields.'
		}else{
			if(!todo.description){
				todo.description = '';
			}
			ToDo.createTask(todo).then((data)=>{
				console.log(data);
				if(data.data.success){
					$scope.data = {};
					$scope.tasks.push(data.data.task);
					$('#newTaskForm').collapse('hide');
					$scope.newFormOpen = false;
				}else{

				}
			})
			
		}
	}

	this.editTask = function(task_id){
		console.log(task_id);
		ToDo.getTask(task_id).then((data)=>{
			console.log(data);
			if(data.data.success){
				$scope.edit = data.data.task;
				var index = $scope.tasks.findIndex(x=> x.id == data.data.task.id);
				$scope.tasks[index].editForm = true;
			}else{

			}
		})
	}

	this.cancelUpdateTask = function(task){
		var index = $scope.tasks.findIndex(x=> x.id == task.id);
		$scope.tasks[index].editForm = false;
	}

	this.updateTask = function(task){
		ToDo.updateTask(task).then((data)=>{
			console.log(data);
			if(data.data.success){
				var index = $scope.tasks.findIndex(x=> x.id == task.id);
				console.log(index);
				$scope.tasks[index] = data.data.task
				$scope.tasks[index].editForm = false;

			}else{

			}
		})

	}

	this.deleteTask = function(id){
		ToDo.deleteTask(id).then((data)=>{
			console.log(data);
			if(data.data.success){
				var index = $scope.tasks.findIndex(x=> x.id == id);
				$scope.tasks.splice(index, 1);
			}else{

			}
		})
	}

	
})
