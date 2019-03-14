angular.module('todoController', ['todoServices'])
.controller('todoCtrl', function($scope, $uibModal, $timeout, $window, $routeParams, $route, ToDo) {
	const app = this;

	app.load = true;
	app.newFormOpen = false;
    app.more = false;

	//get first 10 tasks
	function getFirstTasks(){
		ToDo.getFirstTasks()
		.then((data)=>{
			$scope.tasks = data.data.tasks;
			$scope.totalItems = data.data.totalItems;
			// show and hide load more
            if($scope.tasks.length < $scope.totalItems){
                app.more = true;
            }else{
            	app.more = false;
            }
			app.load = false;
		})
		.catch((data)=>{
			$scope.errorMsg = data.data.message;
		 	app.load = false;
		})
	}

	getFirstTasks();

	//get additional tasks
	this.loadMore = ()=>{
		app.moreSpinner = true;
		//find the last id from the all tasks which is already loaded
		const last_id = Math.min.apply(Math, $scope.tasks.map((task)=>{ return task.id; }));
		ToDo.getMoreTasks(last_id)
		.then((data)=>{
			$scope.tasks = $scope.tasks.concat(data.data.tasks);
			$scope.totalItems = data.data.totalItems;
			
			// show and hide load more
            if($scope.tasks.length < $scope.totalItems){
                app.more = true;
            }else{
            	app.more = false;
            }
            app.moreSpinner = false;
		})
		.catch((data)=>{
			$scope.errorMore = data.data.message;
		 	app.moreSpinner = false;
		})
	}


	//open and close the form to create a new task
	this.openNewTaskForm = ()=>{
		if(!app.newFormOpen){
			app.newFormOpen = true;
		}else{
			app.newFormOpen = false;
			//reset the form
			app.data = {};
			app.newTaskForm.$setPristine();
			app.newTaskForm.$setUntouched();
		}
	}
	//create a new task
	this.createTask = (task)=>{
		app.disabled = true;
		if((!task) || (!task.title || !task.description)){
			app.disabled = false;
		}else{
			ToDo.createTask(task)
			.then((data)=>{
				//push the new task in frontend(avoid reloading the whole tasks)
				$scope.tasks.push(data.data.task);
				$scope.totalItems = data.data.totalItems;

				app.data = {};
				$('#newTaskForm').collapse('hide');
				app.newFormOpen = false;
				app.disabled = false;
				//reset the form
				app.newTaskForm.$setPristine();
				app.newTaskForm.$setUntouched();
			})
			.catch((data)=>{
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
        	const updated_task = ToDo.getTask();//get the task which was stored in modalInstanceCtrl
        	if(updated_task){
        		//override the updated task in frontend(avoid reloading the whole tasks)
        		const index = $scope.tasks.findIndex(x=> x.id == updated_task.id);
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
			//remove the task in frontend(avoid reloading the whole tasks)
			const index = $scope.tasks.findIndex(x=> x.id == id);
			$scope.tasks.splice(index, 1);
			$scope.totalItems = data.data.totalItems;
			// show and hide load more
			if($scope.tasks.length < $scope.totalItems){
                app.more = true;
            }else{
            	app.more = false;
            }

		})
		.catch((data)=>{
			console.log(data);
			$scope.errorDelete = data.data.message;
		})
	}
	
	
})
