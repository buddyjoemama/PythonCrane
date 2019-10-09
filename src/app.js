(function() {
    var app = angular.module('crane.app', ['ui.bootstrap', 'ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'cameraSelector.html',
                controller: 'cameraController as c'
            })
            .when('/crane', {
                templateUrl: 'crane.html',
                controller: 'viewController as v'
            })
            .when('/overhead', {
                templateUrl: 'overhead.html',
                controller: 'viewController as v'
            });
        });
    
    app.component('craneControls', {
        templateUrl: 'components/craneControls.html',
        controller: function() {
            
        }
    });

    app.controller('cameraController', function() {
        var self = this; 
        
        self.cameras = [
            {
                url: 'http://192.168.86.24:8081/',
                name: 'Crane'
            }, 
            {
                url: 'http://192.168.86.24:8082/',
                name: 'Overhead'
            }
        ]
    });

    app.controller('viewController', function() {
        var self = this;


    });
})();    