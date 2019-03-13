angular.module('modalInstanceController', ['todoServices'])
.controller('ModalInstanceCtrl', function($timeout, $scope, $uibModal, $Modaldata, $uibModalInstance, ToDo) {
	const app = this;
	//clone data to prevent changes in parent scope
	function initPopUp() { 
	    let initdata = []; 
	    if ($Modaldata)
	        initdata = angular.copy($Modaldata);
	    return initdata;
	}

	$scope.modal_data = initPopUp();  

	$scope.ok = function () {
		$uibModalInstance.close($scope.modal_data);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};


	this.updateTask = function(task){
		app.disabled = true;
		if((!task) || (!task.title || !task.description)){
			app.disabled = false;
		}else{
			ToDo.updateTask(task)
			.then((data)=>{
				console.log(data);
				ToDo.setTask(data.data.task);
				$uibModalInstance.dismiss('cancel');
			})
			.catch(function(data) {
				$scope.errorEdit = data.data.message;
				app.disabled = false;
			})
		}

	}


})