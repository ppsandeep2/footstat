
var myApp = angular.module('footballApp', ['ngRoute']); 

myApp.controller('mainController', ['$http','$q', function($http,$q) {
    var main = this;
    this.combined = [];
    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {
            cache: false
        });
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {
            cache: false
        });
        
      console.log(main.Json1);
           //getting  proomises
            $q.all([main.Json1, main.Json2]).then(function successCallback(response) {
          
            console.log(response);
            this.firstfile = response[0].data.rounds;
            this.secondfile = response[1].data.rounds;
            main.combined = response[0].data.rounds.concat(response[1].data.rounds);
            console.log(main.combined);

        }, function errorCallback(response) {

            alert("Error");

        });
    

    } // end load all Data
    
    this.loadAllData();




}]); // end mainController




myApp.controller('matchController', ['$http','$q','$routeParams',function($http,$q,$routeParams) {
    var main = this;
  
    main.combined = [];
    

    this.team1 = $routeParams.team1;
    

    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {
            cache: false
        });
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {
            cache: false
        


        });
        
    
           //getting  proomises
            $q.all([main.Json1, main.Json2]).then(function successCallback(response) {
          
           ;
            this.firstfile = response[0].data.rounds;
            this.secondfile = response[1].data.rounds;
            main.combined = response[0].data.rounds.concat(response[1].data.rounds);
          
console.log("asdasdasdasdasd");
        }, function errorCallback(response) {

            alert("Error occurred. Check the console.");

        });
    

    } // end load all Data
    
    this.loadAllData();
  




}]); // end mainController



