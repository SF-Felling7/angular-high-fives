var HighFiveApp = angular.module( 'HighFiveApp', []);

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
