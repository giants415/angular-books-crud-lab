angular
    .module('angularBooks')
    .controller('ShowBooksController', ShowBooksController);

ShowBooksController.$inject=['$http', '$routeParams', '$location'];
  function ShowBooksController($http, $routeParams, $location) {
    var vm = this;
    var bookId = $routeParams.id;
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/'+bookId
    }).then(function showSuccessCb(response) {
      console.log('show a book worked', response.data, bookId);
      vm.book = response.data;
    }, function showErrorCb(error){
      console.log('Error getting a book: ', error);
    });

    vm.updateBook = function(bookToUpdate) {
      console.log('update book: ', bookToUpdate);
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/books/' + bookToUpdate._id,
        data: {
          title: bookToUpdate.title,
          author: bookToUpdate.author,
          image: bookToUpdate.image,
          releaseDate: bookToUpdate.releaseDate
        }
      }).then(function updateBookSucess(response) {
        console.log('updated book info: ', bookId, response.data);
        vm.book = response.data;
        $location.path('/');
      }, function error(error){
        console.log('Error: ', error);
      });
    };

    vm.deleteBook = function(book) {
      console.log('delete book: ', book);
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + book._id,
      }).then(function updateBookSucess(response) {
        console.log('deleted book success: ', response.data);
        $location.path('/');
      }, function error(error){
        console.log('Error: ', error);
      });
    };
  }
