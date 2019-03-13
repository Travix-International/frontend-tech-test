angular.module('todoController', ['todoServices'])
.controller('todoCtrl', function($scope, ToDo, $uibModal) {
	const app = this;
	app.load = true;
	$scope.tasks = []
	app.newFormOpen = false;
	//get all tasks from json file
	function getAllTasks(){
		ToDo.getAllTasks()
		.then((data)=>{
			console.log(data);
			$scope.tasks = data.data.tasks;
			app.load = false;
		})
		.catch(function(data) {
			$scope.errorMsg = data.data.message;
		 	app.load = false;
		})
	}

	getAllTasks();
	//open and close the form to create a new task
	this.openNewTaskForm = ()=>{
		if(!app.newFormOpen){
			app.newFormOpen = true;
		}else{
			app.newFormOpen = false;
			app.data = {};
			app.newTaskForm.$setPristine();
			app.newTaskForm.$setUntouched();
		}
	}
	//create a new task
	this.createTask = (task)=>{
		console.log(task)
		app.disabled = true;
		if((!task) || (!task.title || !task.description)){
			app.disabled = false;
		}else{
			ToDo.createTask(task)
			.then((data)=>{
				console.log(data);
				$scope.tasks.push(data.data.task);
				app.data = {};
				$('#newTaskForm').collapse('hide');
				app.newFormOpen = false;
				app.disabled = false;
				app.newTaskForm.$setPristine();
				app.newTaskForm.$setUntouched();
			})
			.catch(function(data) {
				$scope.errorNew = data.data.message;
				app.disabled = false;
			})
		}
	}
	// open modal to edit the task
	this.openUpdateTask = (task)=>{
		const modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/views/edit.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            resolve: {
                $Modaldata : function () {
                  return task;
                }
            }
        });
        modalInstance.result.then(
            function () {

        }, function () {
        	const updated_task = ToDo.getTask();
        	console.log(updated_task)
        	if(updated_task){
        		const index = $scope.tasks.findIndex(x=> x.id == updated_task.id);
				console.log(index);
				$scope.tasks[index] = updated_task;
				ToDo.resetTask();
			}
        });
	}

	// delete the task
	this.deleteTask = (id)=>{
		ToDo.deleteTask(id)
		.then((data)=>{
			console.log(data);
			const index = $scope.tasks.findIndex(x=> x.id == id);
			$scope.tasks.splice(index, 1);

		})
		.catch(function(data) {
			$scope.errorDelete = data.data.message;
		})
	}

	
	
})
