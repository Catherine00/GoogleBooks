(function () {
    'use strict';
    angular.module("serviceModule").factory('BookService', BookService);

    BookService.$inject = ['$resource'];

    function BookService($resource) {
        return $resource('https://www.googleapis.com/books/v1/volumes',
       { maxResults: '40', callback: 'JSON_CALLBACK', key: 'AIzaSyATldFLGtPPZVLecasP0nFXkX6RqXa7VEI' },
       {
           get: { method: 'JSONP' }
       });
    }
})();