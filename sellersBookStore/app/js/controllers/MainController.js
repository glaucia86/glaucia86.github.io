/* Controlador responsável por toda a lógica do projeto */

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Os Melhores Best-Sellers Ever!';
  $scope.promo = 'Venha conferir mais essa promoção!';

  $scope.products = [
    {
      name: 'The Book of Trees',
   	  price: 19,
      pubDate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubDate: new Date('2016', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Star Wars - Character Encyclopedia (Updated and Expanded)',
      price: 11.59,
      pubDate: new Date('2016', '05', '01'),
      cover: 'img/star-wars-encyclopedia.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'The Science of Good Cooking (Illustrated Cookbooks)',
      price: 21.81,
      pubDate: new Date('2012', '10', '01'),
      cover: 'img/the-science-of-good-cooking.jpg',
      likes: 0,
      dislikes: 0
    }
  ];

  /* Função para poder adicionar os likes dos produtos */
   $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };

  /* Função para poder adicionar os dislikes dos produtos */
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
}]);