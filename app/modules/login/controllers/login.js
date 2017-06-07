'use strict';

angular.module('login')
  .controller('LoginCtrl', function ($scope, $firebaseAuth, LoginFactory) {
	
	$scope.login = function () 
	{
		var account = new LoginFactory.login()
		var auth = $firebaseAuth();
	
                console.log("login:"+$scope) 
	  	auth.$signInWithEmailAndPassword('ton.oliv3ira@gmail.com', 'Megadeth6').then(function(firebaseUser) {
		 console.log("Signed in as:", firebaseUser.uid);
	        $state.go('main');
	 }).
	catch(function(error) 
	{
	    console.log("Authentication failed:", error);
	});

    };
  });


