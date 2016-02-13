angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function(){
    return Links.getData().then(function(result){
      $scope.data.links = result;
    });
  };

  $scope.data.links = $scope.getLinks();
  
  
})

