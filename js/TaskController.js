app.controller('TaskCtrl', function ($scope, $timeout, $mdSidenav, $log, $firebaseArray, $mdToast) {

 	$scope.timestamp = moment().format('X');

    /*=========================== save ========================================*/
    $scope.saveTodo = function(todo){
          var ref = new Firebase(firebaseUrl+"todo/");

          $scope.todoAdd = {
              "task": todo.task,
              "keterangan": todo.keterangan,
              "time": $scope.timestamp,
          };

          $scope.getTodo = $firebaseArray(ref);
          $scope.getTodo.$add( $scope.todoAdd  );

          

          console.log($scope.todoAdd);

          $mdToast.show(
            $mdToast.simple()
              .textContent('Success Saving Data!')
              .position("top right")
              .hideDelay(3000)
          );
    }

});