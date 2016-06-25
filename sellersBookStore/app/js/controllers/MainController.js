app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Os Melhores Best-Sellers Ever!';
  $scope.promo = 'Venha conferir mais essa promoção!';

  $scope.products = [
    {
      name: 'The Book of Trees',
   	  price: 19,
      pubDate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubDate: new Date('2016', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    }
  ];
}]);