var foodsearchApp = angular.module('foodsearchApp', []);

//2. create controller
foodsearchApp.controller("FoodSearchController", function ($scope,$filter) {

  
  $scope.searchItem = localStorage.getItem("searchItem");
  //alert( $scope.searchItem);
  
  $scope.products=[ {
    prodId: 1001, prodName: "Veg Loaded Pizza", prodPrice: "450",image:"images/menu-pizza.jpg",
}
,
{
    prodId: 1002, prodName: "Veg Burger", prodPrice: "125",image:"images/menu-burger.jpg",
}
,
{
    prodId: 1003, prodName: "Steam MOMO", prodPrice: "100",image:"images/menu-momo.jpg",
},
{
    prodId: 1004, prodName: "Fried MOMO", prodPrice: "200",image:"images/menu-momo.jpg",
},
{
    prodId: 1005, prodName: "Maxican Burger", prodPrice: "175",image:"images/menu-burger.jpg",
},
{
    prodId: 1006, prodName: "Corn cheese pizza", prodPrice: "350",image:"images/menu-pizza.jpg",
}
]
$scope.searchedItemByCustomer = $filter('filter')($scope.products, { prodName: $scope.searchItem });

$scope.collectFoodData = function(index){
    //alert("in method");
   console.log($scope.searchedItemByCustomer[index]);
   localStorage.setItem("seletedFoodItem", JSON.stringify($scope.searchedItemByCustomer[index]));
   window.location.assign("order.html")


}

});