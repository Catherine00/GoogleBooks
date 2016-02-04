(function () {
    'use strict'

    angular.module("filterModule").filter('formatFilter', function () {
        return function (text) {
            if (text !== null) {
                for (var i in text) { var authors = text[i] }
                return authors;
            }
        };
    });


    angular.module("filterModule").filter('dateFilter', function () {
        return function (text) {
            if (text !== null) {
                var d = new Date(text);
                var day = d.getDate();
                var month = d.getMonth() + 1;
                var year = d.getFullYear();
                return (month + "/" + day + "/" + year);
            }
        };
    });
})();

                