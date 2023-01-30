var foodApp = angular.module('foodApp', []);

//2. create controller
foodApp.controller("SearchController", function ($scope) {

  // alert("in ctr");
   $scope.searchitem = function(){
   // alert("inside method");
   $scope.enteredSearchItem = $scope.searchitementered;
  // alert(enteredSearchItem);
  
   window.location.assign("food-search.html")
   localStorage.setItem("searchItem", $scope.enteredSearchItem);

   }
});