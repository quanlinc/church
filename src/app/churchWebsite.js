'use strict';

angular.module('churchWebsite', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'app/views/main.html',controller: 'MainCtrl'}) //首页
      .when('/about', {templateUrl: 'app/views/about.html',controller: 'AboutCtrl'}) //关于我们
      .when('/staff', {templateUrl: 'app/views/staff.html',controller: 'StaffCtrl'}) //牧师同工
      .when('/event', {templateUrl: 'app/views/event.html',controller: 'EventCtrl'}) //活动
      .when('/charity', {templateUrl: 'app/views/charity.html',controller: 'CharityCtrl'}) //慈善
      .when('/time', {templateUrl: 'app/views/time.html',controller: 'TimeCtrl'}) //聚会时间
      .when('/contact', {templateUrl: 'app/views/contact.html',controller: 'ContactCtrl'}) //联系方式
      .when('/newsDetail/:id', {templateUrl: 'app/views/newsDetail.html',controller: 'NewsDetailCtrl'}) //新闻详情
      .otherwise({
        redirectTo: '/'
      });
  })
;
