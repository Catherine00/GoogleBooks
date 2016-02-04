(function () {
    'use strict'
    angular.module("homeModule").controller('HomeController', function ($scope, BookService) {
        $scope.searchTerm = "Angular JS";
        $scope.doSearch = function () {
            BookService.get({ q: $scope.searchTerm }, function (response) {
                $scope.bookResults = response.items;
                $scope.orderProp = 'volumeInfo.title';

            });
        }
    });
})();