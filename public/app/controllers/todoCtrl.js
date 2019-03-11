angular.module('todoController', ['todoServices'])
.controller('todoCtrl', function($scope, ToDo, $uibModal) {
	var app = this;
	app.load = true;
	$scope.tasks = []
	app.newFormOpen = false;

	function getAllTasks(){
		ToDo.getAllTasks().then((data)=>{
			console.log(data);
			if(data.data.success){
				$scope.tasks = data.data.tasks;
				app.load = false;
			}else{
				$scope.errorMsg = data.data.message;
				app.load = false;
			}
		})
	}

	getAllTasks();

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

	this.createTask = (todo)=>{
		console.log(todo)
		app.disabled = true;
		if((!todo) || (!todo.title || !todo.description)){
			app.disabled = false;
		}else{
			ToDo.createTask(todo).then((data)=>{
				console.log(data);
				if(data.data.success){
					$scope.tasks.push(data.data.task);
					app.data = {};
					$('#newTaskForm').collapse('hide');
					app.newFormOpen = false;
					app.disabled = false;
					app.newTaskForm.$setPristine();
					app.newTaskForm.$setUntouched();
				}else{
					$scope.error = data.data.message;
					app.disabled = false;
				}
			})
			
		}
	}

	this.openUpdateTask = (task)=>{
		var modalInstance = $uibModal.open({
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
        	var updated_task = ToDo.getTask();
        	console.log(updated_task)
        	if(updated_task){
        		var index = $scope.tasks.findIndex(x=> x.id == updated_task.id);
				console.log(index);
				$scope.tasks[index] = updated_task;
				ToDo.resetTask();
			}
        });
	}

	this.deleteTask = (id)=>{
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
