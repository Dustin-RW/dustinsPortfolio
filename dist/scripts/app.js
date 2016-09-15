(function() {
  function config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode({ //hashBang URLs are disabled
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl as home'
            })
            .state('my-projects', {
              url:'my-projects',
              templateUrl: '/templates/my-projects.html',
              contoller: 'ProjectsCtrl'
            })
            .state('about-me', {
              url: '/about-me',
              templateUrl: '/templates/about-me.html',
              controller: 'AboutMeCtrl'
            })
            .state('contact', {
              url: 'contact-info',
              templateUrl: 'templates/contact.html',
            });
      }

  angular
    .module("myApp", ['ui.router'])
    .config(config);
})();
