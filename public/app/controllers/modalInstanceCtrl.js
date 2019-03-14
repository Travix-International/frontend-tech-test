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

	$scope.ok =()=>{
		$uibModalInstance.close($scope.modal_data);
	};

	$scope.cancel =()=>{
		$uibModalInstance.dismiss('cancel');
	};

	//update the task
	this.updateTask =(task)=>{
		app.disabled = true;
		if((!task) || (!task.title || !task.description)){
			app.disabled = false;
		}else{
			ToDo.updateTask(task)
			.then((data)=>{
				console.log(data);
				ToDo.setTask(data.data.task);//store the task in setter to get in todoCtrl
				$uibModalInstance.dismiss('cancel');
			})
			.catch((data)=>{
				$scope.errorEdit = data.data.message;
				app.disabled = false;
			})
		}

	}


})