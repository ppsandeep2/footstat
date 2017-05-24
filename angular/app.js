
var myApp = angular.module('footballApp', ['ngRoute']); 


myApp.controller('mainController', ['$http', function($http) {
    var main = this;
    this.combined = [];
    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {
            cache: false
        });
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {
            cache: false
        });
        
       
    } // end load all Data
    this.loadAllData();
}]); // end mainController

///not yet completed
