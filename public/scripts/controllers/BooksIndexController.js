angular
  .module('angularBooks')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};
  vm.newBook = {
    title: ,
    author: ,
    coverImage: ,
    releaseDate:
  }
};

$http({
  method: 'GET',
  url: 'https://super-crud.herokuapp.com/books'
}).then(function successCb(response) {
  vm.books = response.data;
}, function errorCb(response){
  console.log('Error getting data: ' + response);
});
