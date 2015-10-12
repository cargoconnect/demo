'use strict';

/* Controllers */

app.controller('MapController', function ($scope) {

    $scope.map = {
        center: [-6.194592, 106.826771],
        options: function () {
            return {
                streetViewControl: false,
                scrollwheel: false
            }
        },
    };
    $scope.marker = {
        position: [-6.279915, 106.839818],
        decimals: 4,
        options: function () {
            return { draggable: true };
        }
    }
    $scope.points = {
        coords: [
          [-6.204781, 106.907118],
          [-6.294846, 106.925838],
          [-6.181704, 106.753615],
          [-6.382283, 107.113789],
          [-6.618335, 107.811421],
          [-6.981570, 109.479927],
          [-7.004205, 111.793561],
          [-4.969934, 104.910617],
          [-3.699132, 104.854759],
        ],
        options: function (coords, properties, i, map) {
            return {
                draggable: true
            }
        },
        events: {
            click: function (e, point, map, points) {
                alert(point)
            }
        },
        decimals: 3
    };
});

app.controller('ShipmentMapController', function ($scope) {

    $scope.map = {
        center: [-6.194592, 106.826771],
        options: function () {
            return {
                streetViewControl: false,
                scrollwheel: false
            }
        },
    };
    $scope.marker = {
        position: [-6.279915, 106.839818],
        decimals: 4,
        options: function () {
            return { draggable: true };
        }
    }
    $scope.points = {
        coords: [
          [-6.204781, 106.907118],
          [-6.294846, 106.925838],
          [-6.181704, 106.753615],
        ],
        options: function (coords, properties, i, map) {
            return {
                draggable: true
            }
        },
        events: {
            click: function (e, point, map, points) {
                alert(point)
            }
        },
        decimals: 3
    };
});