console.log ('js');

var myApp = angular.module('myApp', []);

var allCats=[];

myApp.controller('catController', ['$scope', '$http', function($scope, $http){
	console.log('NG');

}]);//end controller
