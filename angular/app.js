
var myApp = angular.module('footballApp', ['ngRoute']); 

myApp.controller('mainController', ['$http','$q', function($http,$q) {
    var main = this;
    this.combined = [];
    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {});
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {});
        
      
           //getting  promises
            $q.all([main.Json1, main.Json2]).then(function successCallback(response) {
          
           
            this.firstfile = response[0].data.rounds;
            this.secondfile = response[1].data.rounds;
            main.combined = response[0].data.rounds.concat(response[1].data.rounds);
            

        }, function errorCallback(response) {

            alert("Error");

        });
    

    } // end load all Data
    
    this.loadAllData();




}]); // end mainController




myApp.controller('matchController', ['$http','$q','$routeParams',function($http,$q,$routeParams) {
    var main = this;
  
    main.combined = [];
    

    this.team1code = $routeParams.team1;
    this.team2code = $routeParams.team2;
    this.date = $routeParams.date;
    this.score1="";
    this.score2="";
    this.team1name="";
    this.team2name="";
    this.title="";




    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {});
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {});
        
    
           //getting  promises
            $q.all([main.Json1, main.Json2]).then(function successCallback(response) {
          
           
            this.firstfile = response[0].data.rounds;
            this.secondfile = response[1].data.rounds;
            main.combined = firstfile.concat(secondfile);
           
           for(var i = 0; i < main.combined.length; i++) {
                    var data2 = main.combined[i];

                    for (var j = 0; j < data2.matches.length; j++) {
                    var data3=data2.matches[j];
                     

                     if(main.team1code==data3.team1.code && main.team2code==data3.team2.code && main.date==data3.date)
{
                        main.title=data2.name;
                        main.score1=data3.score1;
                        main.score2=data3.score2;
                        main.team1name=data3.team1.name;
                        main.team2name=data3.team2.name;
          
           }            



                    }}
         










        }, function errorCallback(response) {

            alert("Error occurred. Check the console.");

        });
    

    } // end load all Data
    
    this.loadAllData();
 




}]); // end matchController

myApp.controller('teamController', ['$http','$q','$routeParams',function($http,$q,$routeParams) {
    var main = this;
  
    main.combined = [];
    

    this.team1code = $routeParams.team;
 
    this.teamcode = $routeParams.teamcode;
    this.totalscore=0;
    this.totalmatches=0;
    this.totalwon=0;
    this.totalloss=0;
     this.totaltie=0;
    this.title="";




    this.loadAllData = function() {
        main.Json1 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {});
        main.Json2 = $http.get('https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json', {});
        
    
           //getting  promises
            $q.all([main.Json1, main.Json2]).then(function successCallback(response) {
          
           
            this.firstfile = response[0].data.rounds;
            this.secondfile = response[1].data.rounds;
            main.combined = firstfile.concat(secondfile);
           
           for(var i = 0; i < main.combined.length; i++) {
                    var data2 = main.combined[i];

                    for (var j = 0; j < data2.matches.length; j++) {
                    var data3=data2.matches[j];
                     

                     if(main.teamcode==data3.team1.code)
                       {if(data3.score1!=null && data3.score2!=null){
                          main.totalscore=main.totalscore+data3.score1;
                          if(data3.score1>data3.score2)
                            { 
                               main.totalwon++;
                            } 
                          if(data3.score1<data3.score2)
                            { 
                               main.totalloss++;
                            }
                          else{main.totaltie++;}      
                       }
                       }
                     
                     if(main.teamcode==data3.team2.code)
                      {if(data3.score1!=null && data3.score2!=null){
                         main.totalscore=main.totalscore+data3.score2; 

                          
                          if(data3.score2>data3.score1)
                            { 
                               main.totalwon++;
                            } 
                          if(data3.score2<data3.score1)
                            { 
                               main.totalloss++;
                            }
                          else{main.totaltie++;}      
                       }

                      }  


                    


                    }}
          console.log(main.totalwon);
            main.totalmatches=main.totalloss+main.totaltie+main.totalwon;










        }, function errorCallback(response) {

            alert("Error occurred. Check the console.");

        });
    

    } // end load all Data
    
    this.loadAllData();
 




}]); // end matchController


myApp.controller('aboutController', [function() {
  

}]); // end aboutController
