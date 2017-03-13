// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// creating list controller
.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/fooddata.json').success(function(data) {
      $scope.menu = data.menu;  
        //console.log($scope.menu);
        $scope.toggleStar=function(item)
	  {
		  item.star=!item.star;
	  }
    });
    //defining dorefresh()
    $scope.dorefresh=function(){
		  $http.get('js/fooddata.json').success(function(data) {
      $scope.menu = data.menu;  
	  $scope.broadcasr('scroll.refreshComplete');
		  });  
	  }
}]);

