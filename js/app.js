// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'ngStorage', 'starter.controllers'])

.run(function ($ionicPlatform, $localStorage, $rootScope) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        $localStorage.lat = "10.10";

    });
})

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
        //.state('Intro', {
        //    url: '/intro',
        //    templateUrl: 'templates/intro.html',
        //    controller: 'IntroCtrl'
        //})

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.mystatement', {
        url: '/mystatement',
        views: {
            'menuContent': {
                templateUrl: 'templates/mystatement.html',
                controller: 'MyStatementCtrl'
            }
        }
    })

    .state('app.myprofile', {
        url: '/myprofile',
        views: {
            'menuContent': {

                templateUrl: 'templates/myprofile.html',
                controller: 'MyProfileCtrl'

            }
        }
    })
       .state('app.dashbord', {
           url: '/dashbord',
           views: {
               'menuContent': {

                   templateUrl: 'templates/dashbord.html',
                   controller: 'DashbordCtrl'

               }
           }
       })

         .state('app.mycard', {
             url: '/mycard',
             views: {
                 'menuContent': {

                     templateUrl: 'templates/mycard.html',
                     controller: 'MyCardCtrl'

                 }
             }
         })

   

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["Accept"];
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
});
