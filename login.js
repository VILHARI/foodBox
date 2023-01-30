(function() {
    var app = angular.module('myApp', ['ui.router']);
    
    app.run(function($rootScope, $location, $state, LoginService) {
      $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            console.log('Changed state to: ' + toState);
        });
      
        if(!LoginService.isAuthenticated()) {
          $state.transitionTo('login');
        }
    });
    
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      
      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl : 'login.html',
          controller : 'LoginController'
        })
        .state('home', {
          url : '/home',
          templateUrl : 'home.html',
          controller : 'HomeController'
        })
        .state('changepass', {
            url : '/changepass',
            templateUrl : 'ok.html',
            controller : 'ChangePassController'
          })
          .state('password_reset_success',{
            url : '/password_reset_success',
            templateUrl : 'ok.html',
            controller : 'password_reset_successController'
          })
    }]);
  
    app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
      $rootScope.title = "AngularJS Login Sample";
      
      $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)) {
          $scope.error = '';
          $scope.username = '';
          $scope.password = '';
          $state.transitionTo('home');
        } else {
          $scope.error = "Incorrect username/password !";
        }   
      };
      
    });
    
    app.controller('HomeController', function($scope, $rootScope, $stateParams, $state, LoginService) {
      $rootScope.title = "AngularJS Login Sample";

      $scope.products=[ {
        prodId: 1001, prodName: "Pizza", prodPrice: "500",Quantity:"10",
    }
    ,
    {
        prodId: 1002, prodName: "Burger", prodPrice: "125",Quantity:"20",
    }
    ,
    {
        prodId: 1003, prodName: "Biryani", prodPrice: "600",Quantity:"5",
    }
    ]
    localStorage.setItem("foodlist",$scope.products);
   

    $scope.GetDetails = function (index) {
       // alert(index);
        $scope.foodlist = localStorage.getItem("foodlist");
        console.log($scope.products.splice(index,1));
        //localStorage.setItem("foodlist",$scope.foodlist);


    };

    $scope.showinput = function(){
        //alert("ho");
        $scope.showPi = true;
        $scope.showPn= true;
        $scope.showPrice= true;
        $scope.showqan= true;
    }
    $scope.AddItem = function(){
        alert($scope.prodId);

        var newProduct = {
            prodId: $scope.prodId, prodName: $scope.prodname, prodPrice: $scope.price,Quantity:$scope.quantity
        }
        $scope.products.push(newProduct);

    }
    });
    app.controller('ChangePassController', function($scope, $rootScope, $stateParams, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";
        $scope.changepass =function(){
            $state.transitionTo('changepass');
            
        }
        $scope.passowrdSubmit = function(){
          // alert("sucess");
           
           
            if($scope.password==$scope.confirmPassword){
                alert("Password Reset successfully!");
                $state.transitionTo('login');


            }else{
                alert("Fail to Reset Password!");

            }
        }
        
        
      });

      app.controller('password_reset_successController', function($scope, $rootScope, $stateParams, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";
            alert("hi");
           


      });
    
    app.factory('LoginService', function() {
      var admin = 'a';
      var pass = '1';
      var isAuthenticated = false;
      
      return {
        login : function(username, password) {
          isAuthenticated = username === admin && password === pass;
          return isAuthenticated;
        },
        isAuthenticated : function() {
          return isAuthenticated;
        }
      };
      
    });
    
  })();