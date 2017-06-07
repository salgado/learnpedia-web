'use strict';

angular.module('login')
  .controller('LoginCtrl', function ($scope, $firebaseAuth) {
    $scope.login = function () {
	var auth = $firebaseAuth();
	  auth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
	    console.log("Signed in as:", firebaseUser.uid);
	        $state.go('main');
	  }).catch(function(error) 
	{
	    console.log("Authentication failed:", error);
	  });

    };
  });


