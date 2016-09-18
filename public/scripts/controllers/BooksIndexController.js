angular
  .module('angularBooks')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
  function BooksIndexController ($http) {
    var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
    }).then(function successCb(response) {
      console.log('get all books data worked');
      vm.books = response.data.books;
    }, function errorCb(error){
      console.log('Error getting all books data: ' + error);
  });
};
