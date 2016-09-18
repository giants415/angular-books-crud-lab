console.log('app.js is connected');

angular
  .module('angularBooks', ['ngRoute'])
  .config(config);


congif.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/books/index.html'
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
