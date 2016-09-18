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
  .otherwise ({
    redirectTo: '/'
  });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
