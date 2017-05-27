//var myApp = angular.module('footballApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myStats'
        })
         .when('/view/:team1/:team2/:date',{
            // location of the template
            templateUrl     : 'views/match-view.html',
            // Which controller it should use 
            controller      : 'matchController',
            // what is the alias of that controller.
            controllerAs    : 'matchC'
        })
            .when('/about',{
            // location of the template
            templateUrl     : 'about.html',
            // Which controller it should use 
            controller      : 'aboutController',
            // what is the alias of that controller.
            controllerAs    : 'aboutc'
        })
    
      .when('/team/:teamcode/', {
            templateUrl: 'views/team-view.html',
            controller: 'teamController',
            controllerAs: 'team'
        })
    

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 class = text-center >404 page not found</h1>'
            }
        );
}]);


