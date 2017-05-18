var HighFiveApp = angular.module( 'HighFiveApp', ['ngRoute'] );


HighFiveApp.config(function($routeProvider, $locationProvider) {
 $routeProvider.when('/', {
   templateUrl: '/views/pages/default.html',
   controller: 'TheHighFives as thf'
 }).when( '/cyan',{
   templateUrl: '/views/pages/cyan.html',
   controller: 'cyanController as cc'
 }).when( '/turqoise', {
   templateUrl: '/views/pages/turqoise.html',
   controller: 'turqoiseController as tc'
 }).otherwise('/');

 $locationProvider.html5Mode(true);

});

HighFiveApp.controller( 'TheHighFives', function( $http, GetHighFives ) {

//global variable to the controller!
var vm = this;
var counter = 0;

//the array that makes its possible to see on the DOM
vm.randomThing = [];

//current count
// vm.count = GetHighFives.counterGetter();
// console.log( "NG" );

// vm.counting = function()
// {
//   GetHighFives.counterSetter();
//   vm.count = GetHighFives.counterGetter();
// };
vm.pageLoad = GetHighFives.numberGenerator();
console.log('this is the random number generated', vm.pageLoad);

// vm.userNum = GetHighFives.getHighFives();
// console.log('userNum:', userNum);

vm.ramNum = function() {
  vm.randomThing = GetHighFives.getHighFives();
  console.log('button number generated', vm.randomThing);
};


vm.calculating = function() {
  if (vm.randomThing >= vm.pageLoad) {
    vm.count = counter ++;
  }
  else {
    console.log( 'weak high five ');
  }
};

vm.callFunc = function() {
  vm.calculating();
  vm.ramNum();
};



});


HighFiveApp.controller( 'cyanController', function( $http, GetHighFives ) {
  var vm = this;
  var counter = 0;

  //the array that makes its possible to see on the DOM
  vm.randomThing = [];

  //current count
  // vm.count = GetHighFives.counterGetter();
  // console.log( "NG" );

  // vm.counting = function()
  // {
  //   GetHighFives.counterSetter();
  //   vm.count = GetHighFives.counterGetter();
  // };
  vm.pageLoad = GetHighFives.numberGenerator();
  console.log('this is the random number generated', vm.pageLoad);

  // vm.userNum = GetHighFives.getHighFives();
  // console.log('userNum:', userNum);

  vm.ramNum = function() {
    vm.randomThing = GetHighFives.getHighFives();
    console.log('button number generated', vm.randomThing);
  };


  vm.calculating = function() {
    if (vm.randomThing >= vm.pageLoad) {
      vm.count = counter ++;
    }
    else {
      console.log( 'weak high five ');
    }
  };

  vm.callFunc = function() {
    vm.calculating();
    vm.ramNum();
  };
});

HighFiveApp.controller( 'turqoiseController', function( $http, GetHighFives ) {

  var vm = this;
  var counter = 0;

  //the array that makes its possible to see on the DOM
  vm.randomThing = [];

  //current count
  // vm.count = GetHighFives.counterGetter();
  // console.log( "NG" );

  // vm.counting = function()
  // {
  //   GetHighFives.counterSetter();
  //   vm.count = GetHighFives.counterGetter();
  // };
  vm.pageLoad = GetHighFives.numberGenerator();
  console.log('this is the random number generated', vm.pageLoad);

  // vm.userNum = GetHighFives.getHighFives();
  // console.log('userNum:', userNum);

  vm.ramNum = function() {
    vm.randomThing = GetHighFives.getHighFives();
    console.log('button number generated', vm.randomThing);
  };


  vm.calculating = function() {
    if (vm.randomThing >= vm.pageLoad) {
      vm.count = counter ++;
    }
    else {
      console.log( 'weak high five ');
    }
  };

  vm.callFunc = function() {
    vm.calculating();
    vm.ramNum();
  };
});
