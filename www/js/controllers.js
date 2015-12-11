angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope,$http,$ionicLoading)
 {
  $scope.london = 0;
  $scope.Kent = 0;
  $scope.others = 0;

  $ionicLoading.show({
      template: 'Loading...'
    });

    $http.get("http://smartrestaurantsolutions.com/mobileapi-test/Tigger.php?funId=5")
    .success(function(data){
     $scope.datalist = data;
     $ionicLoading.hide();

     $scope.datalist.app.forEach(function(e, i)
     {
          if(e.city=="London")
          {
              $scope.london = $scope.london+1;
          }

          if(e.city=="Kent")
          {
              $scope.Kent = $scope.Kent+1;
          }

          if(e.city!="London" || e.city!="Kent")
          {
              $scope.others = $scope.others+1;              
          }          
     });

     $scope.others = $scope.others - ($scope.london + $scope.Kent);


    });  

});

