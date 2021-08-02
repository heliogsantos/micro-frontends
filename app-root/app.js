angular
  .module('appRoot', ['ngRoute'])
  .controller('microFrontEnds', function () {
    var vm = this;

    vm.title = 'MICRO FRONT-END';

    const scriptAppPagamentos = document.createElement('script');

    scriptAppPagamentos.src = 'http://localhost:5001/main.js';

    const scriptAppRenovacaoCadastral = document.createElement('script');

    scriptAppRenovacaoCadastral.src = 'http://localhost:5002/main.js';

    document.body.appendChild(scriptAppPagamentos);
    document.body.appendChild(scriptAppRenovacaoCadastral);
  });

angular.module('appRoot').config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/pagamentos', {
      templateUrl: 'pages/pagamentos.html',
      controller: 'microFrontEnds',
    })
    .when('/renovacao-cadastral', {
      templateUrl: 'pages/renovacao-cadastral.html',
      controller: 'microFrontEnds',
    })
    .otherwise({ redirectTo: '/' });
});
