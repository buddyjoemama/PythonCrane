(function() {
    var app = angular.module('crane.app', ['ui.bootstrap', 'ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'cameraSelector.html',
                controller: 'cameraController as c'
            })
            .when('/Crane', {
                templateUrl: 'views/crane.html',
                controller: 'viewController as v'
            })
            .when('/Overhead', {
                templateUrl: 'views/overhead.html',
                controller: 'viewController as v'
            });
        });
    
    app.component('craneControls', {
        templateUrl: 'components/craneControls.html',
        controller: function() {p
            
        }
    });

    app.controller('cameraController', function() {
        var self = this; 
        
        self.cameras = [
            {
                url: 'http://192.168.86.33:8081/',
                name: 'Crane'
            }, 
            {
                url: 'http://192.168.86.33:8082/',
                name: 'Overhead'
            }
        ]
    });

    app.controller('viewController', function() {
        var self = this;


    });
})();     