
                    
var myApp = angular.module('gboookApp', [
                                        'serviceModule',
                                        'filterModule',
                                        'homeModule',
                                        'ngResource',
                                        'ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'Home/booklist.html',
            controller: 'HomeController'
        });
}]);


                