console.log('meow.js');

var myApp = angular.module('myApp', []);

myApp.controller('Hoth', ['$scope', '$http', function($scope, $http){
  console.log('totally angular dude');

  $scope.submit = function(){
    console.log('clicked submit');
    var petAdded = {
      Name: $scope.petName,
      Animal: $scope.petType,
      Age: $scope.petAge,
      Image: $scope.petImg
    };
    console.log(petAdded);
    $http({
      method: 'POST',
      url: '/router',
      data: petAdded
    }).then(function(response){
      console.log('POST response: ', response);
    });//end $http
    // $scope.petName='';
    // $scope.petType='';
    // $scope.petAge='';
    // $scope.petImg='';
  }; //end $scope.submit





}]); //end hoth controller
