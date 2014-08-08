var myApp = angular.module('myApp',['storyLine']);
myApp.controller('MainCtrl',('scope', function($scope) {
    window.scope = $scope;
}));

