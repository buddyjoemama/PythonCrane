(function() {
    var app = angular.module("crane.app", [ "ui.bootstrap", "ngRoute" ]).config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "cameraSelector.html",
            controller: "cameraController as c"
        });
    });
    app.controller("cameraController", function() {
        var self = this;
        self.cameras = [ {
            url: "http://192.168.86.24:8081/",
            name: "Crane"
        }, {
            url: "http://192.168.86.24:8082/",
            name: "Overhead"
        } ];
    });
})();