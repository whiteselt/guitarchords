(function (angular) {
  'use strict';

  angular
    .module('guitarChords')
    .component('guitarNeck', {  
      templateUrl: '/components/guitarNeckTemplate.html',
      controller: GuitarNeckController
    });

  function GuitarNeckController() {
    var $ctrl = this;
    $ctrl.$onInit = function() {
    };
  }

})(angular);