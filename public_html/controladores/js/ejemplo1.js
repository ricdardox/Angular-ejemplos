/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ejUno = angular.module('ejUno', []);

ejUno.controller('ControllerUsuario', function ($scope) {
    $scope.models = {
        'usuarios': [
            {
                'nombre': 'Ejemplo',
                'email': 'ejemplo@ejemplo.com',
                'estado': true
            }
        ]
    };
    function limpiar(obj) {
        angular.forEach(obj, function (value, key) {
            if (angular.isDefined($scope[key])) {
                $scope[key] = '';
            }
        });
    }


    $scope.agregarUsuario = function () {
        var usuario = {
            'nombre': $scope.nombre,
            'email': $scope.email,
            'estado': $scope.estado
        };
        $scope.models.usuarios.push(usuario);
        limpiar(usuario);
    };
    $scope.eliminarUsuario = function () {
        var usuarios = $scope.models.usuarios;
    };
});