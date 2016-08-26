angular.module('logInApp',['ngRoute'])
	
.config(function($routeProvider){
		$routeProvider
		.when('/',{
		templateUrl:'templates/login.html',
		controller:'logInController'
		})
		.when('/home',{
			templateUrl:'templates/home.html',
			controller:'homeCtrl'
		})
		 .otherwise({
			    redirectTo: "/"
			  });
	})
	
/*
 * .factory('user',function(){
	var user={};
	user.name="";
	user.getUser=function (){
			return user.name;
		};
	user.setUser=function(username){
			user=username;
		}
})
*/	

.controller('logInController',function($scope,$http,$window){
	//var self=this;
	$scope.message="Message";
	$scope.logIn=function(username,password)
	{
		var urlIs="http://localhost:8080/LoginController/demo/login/validate/"+$scope.username+"/"+$scope.password;
		$http.get(urlIs)
			.success(function(data){
				if(data===1)
					{
					//user.setUser(username);
					$window.location.href = '#/home';
					}
				else
					$scope.message="Error";
			})
			.error(function(status){
				$scope.message="Error 400";
			});
	}
})

.controller('homeCtrl',function($scope){
	$scope.message="Welcome ";//+user.getUser();
});
