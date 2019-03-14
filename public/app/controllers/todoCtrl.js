angular.module('todoController', ['todoServices'])
.controller('todoCtrl', function($scope, $uibModal, $timeout, $window, $routeParams, $route, ToDo) {
	const app = this;

	app.load = true;
	app.newFormOpen = false;

	//initialize for load more
    $scope.more = false;
    $scope.loadCounter = 1;


	//get all tasks from json file
	function getAllTasks(){
		ToDo.getAllTasks()
		.then((data)=>{
			console.log(data);
			$scope.tasks = data.data.tasks;
			$scope.totalItems = data.data.totalItems;

            if($scope.tasks.length < $scope.totalItems){
                $scope.more = true;
            }else{
            	$scope.more = false;
            }
			app.load = false;
		})
		.catch(function(data) {
			console.log(data);
			$scope.errorMsg = data.data.message;
		 	app.load = false;
		})
	}

	getAllTasks();

	this.loadMore = (loadCounter)=>{
		const load_number = loadCounter + 1;
		const last_id = Math.min.apply(Math, $scope.tasks.map(function(task) { return task.id; }));
		const setter = {
			page: load_number,
			last_id : last_id
		}
		console.log(setter)
		ToDo.getMoreTasks(setter)
		.then((data)=>{
			console.log(data);
			$scope.tasks = $scope.tasks.concat(data.data.tasks);
			$scope.totalItems = data.data.totalItems;
            $scope.loadCounter = load_number;

            if($scope.tasks.length < $scope.totalItems){
                $scope.more = true;
            }else{
            	$scope.more = false;
            }
			app.load = false;
		})
		.catch(function(data) {
			console.log(data);
			$scope.errorMsg = data.data.message;
		 	app.load = false;
		})
	}


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
				$scope.totalItems = data.data.totalItems;

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
			$scope.totalItems = data.data.totalItems;
			if($scope.tasks.length < $scope.totalItems){
                $scope.more = true;
            }else{
            	$scope.more = false;
            }

		})
		.catch(function(data) {
			console.log(data);
			$scope.errorDelete = data.data.message;
		})
	}
	
	
})
