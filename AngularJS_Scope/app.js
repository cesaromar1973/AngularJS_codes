var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'Cesar Omar Sanchez';
    $scope.occupation = 'Web Designer/Developer/Coder';
    $scope.gender = 'male';
    $scope.experience = '20 plus years of both Graphic and Web Designer'
    $scope.skills = 'HTML, CSS, Javascript, Linux, Git Bash, JAVA, Adobe Creative Suite', 
    $scope.getname = function() {
        return 'Cesar Omar Sanchez';
    }
    
    console.log($scope);
    
});