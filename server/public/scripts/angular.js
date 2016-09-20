console.log ('js');

var myApp = angular.module('myApp', []);

var allCats=[];

myApp.controller('catController', ['$scope', '$http', function($scope, $http){
	console.log('NG');

$scope.addCat=function(){
	console.log('in addCat', $scope.catName);
	//put a cat in an object
	var newCat = {
		name: $scope.catName,
		trait: $scope.catTrait
	};//end new Cat

	console.log('sending:', newCat);

	//test send a cat via http to post route.
	$http({
		method: 'POST',
		url: '/cats',
		data: newCat
	}).then(function(response){
		console.log('back from server with:', response);
	})//end http call
	allCats.push(newCat);
  console.log('newCat:', newCat);
}; //end add cat
	//push a cat object into our array
}]);//end controller
