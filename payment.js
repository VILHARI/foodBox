var paymentApp = angular.module('paymentApp', []);

//2. create controller
paymentApp.controller("PaymentController", function ($scope,$filter) {
  
    $scope.FoodItem = localStorage.getItem("FoodItem");
    $scope.Quantity = localStorage.getItem("Quantity");
    $scope.Amount = localStorage.getItem("Amount");


});

