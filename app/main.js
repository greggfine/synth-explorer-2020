var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/synths', {
            templateUrl: 'views/keyboards.html'
        })
        .when('/synths/:name/:description/:image', {
            templateUrl: 'views/keyboards-detail.html',
            controller: 'DetailsController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'myAppController'
        }).otherwise({
            redirectTo: '/home'
        })
}])


app.controller('myAppController', ['$scope', '$http', function ($scope, $http){
    $http.get('data/gInfo.json').then(successCallback, errorCallback);
    function successCallback(data) {
        $scope.myData = data.data;
    }
    function errorCallback(error) {
        console.log(error)
    }
}]);

app.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    }
}])

app.controller('DetailsController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.model = {
        name: $routeParams.name,
        description: $routeParams.description,
        image: $routeParams.image,
    }
}])