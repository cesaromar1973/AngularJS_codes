var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
    $scope.name = 'My friend';
    $scope.myname = 'Cesar';
    $scope.experience = 'Over 20 years experience of Graphic/Web Designing';
    $scope.residing = 'West New York, New Jersey';
    $scope.hobbies = 'Photography, Bike Riding, Hiking, and Jogging ';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 10000);
    
}]);
