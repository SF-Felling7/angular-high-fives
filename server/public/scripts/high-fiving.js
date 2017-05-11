myApp.service( 'GetHighFives', function( $http ) {

//counter
  var counter = 0;

//returning current value of counterGetter
  this.counterGetter = function()
  {
    return counter;
  };
//going up by one each time the button is clicked
  this.counterSetter = function()
  {
    console.log( 'counterSetter working!' );
    counter++;
  };
//function that sends the request to the server(app.js) to get the HighFives
//   this.getHighFives = function()
//   {
// return $http({
//   method: 'GET',
//   url: '/getHighFives',
// }).then(function success( info ) {
//   console.log( ' response: ', info );
//   return info.data;
// }); //ending success
//   };//ending getHighFives function

});//ending HighFiveApp function
