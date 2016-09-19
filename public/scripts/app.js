console.log('app.js is connected');

angular.module('angularBooks', ['ngRoute'])
       .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/templates/books.html',
    controller: 'BooksIndexController',
    controllerAs: 'BooksIndexCtrl'
  })
  .when('/books/:id', {
    templateUrl: '../views/templates/showBooks.html',
    controller: 'ShowBooksController',
    controllerAs: 'ShowBooksCtrl'
  })
  .otherwise ({
    redirectTo: '/'
  });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
