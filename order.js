var orderApp = angular.module('orderApp', []);

//2. create controller
orderApp.controller("OrderController", function ($scope,$filter) {
  
    var orderedItem = JSON.parse(localStorage.getItem("seletedFoodItem"));
   
    
    $scope.image = orderedItem.image;
    $scope.prodName = orderedItem.prodName;
    $scope.prodPrice = orderedItem.prodPrice;
    $scope.quanityFood = 1;
    $scope.gst = 10;
    $scope.deleiveryCharge=50;
    $scope.subtotal = parseInt($scope.prodPrice);
    $scope.grandTotal = parseInt($scope.subtotal)+$scope.gst+$scope.deleiveryCharge;

    $scope.calculateAmount = function (){
        $scope.subtotal = $scope.prodPrice * $scope.quanityFood;
        $scope.grandTotal = parseInt($scope.subtotal)+$scope.gst+$scope.deleiveryCharge;
       }
       $scope.setValueForSuccess = function(){
        localStorage.setItem("FoodItem", $scope.prodName);
        localStorage.setItem("Quantity", $scope.quanityFood);
        localStorage.setItem("Amount", $scope.grandTotal);

       }
       

});

