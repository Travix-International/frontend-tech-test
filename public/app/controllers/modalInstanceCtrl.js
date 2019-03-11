angular.module('modalInstanceController', ['todoServices'])
.controller('ModalInstanceCtrl', function($timeout, $scope, $uibModal, $Modaldata, $uibModalInstance, ToDo) {
	var app = this;
	//clone data to prevent changes in parent scope
	function initPopUp() { 
	    var initdata = []; 
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
		ToDo.updateTask(task).then((data)=>{
			console.log(data);
			if(data.data.success){
				ToDo.setTask(data.data.task);
				$uibModalInstance.dismiss('cancel');
			}else{

			}
		})

	}


})