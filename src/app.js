(function() {
    var app = angular.module('crane.app', ['ui.bootstrap', 'ngRoute', 'templates-main'])
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'templates/cameraSelector.html',
                controller: 'cameraController as c'
            })
            .when('/Crane', {
                templateUrl: 'templates/cameraView.html'
            });
        });
    
    app.component('craneControls', {
        templateUrl: 'templates/components/craneControls.html',
        controller: function() {
             
        }
    });

    app.controller('cameraController', function() {
        var self = this; 
        
        self.cameras = [
            {
                url: 'http://192.168.86.33:8081/',
                name: 'Crane',
                route: 'Crane'
            }, 
            {
                url: 'http://192.168.86.33:8082/',
                name: 'Overhead',
                route: 'Crane'
            }
        ]
    });
})();     