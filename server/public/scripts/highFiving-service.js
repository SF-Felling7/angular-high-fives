HighFiveApp.service( 'GetHighFives', function( $http ) {
//counter


//returning current value of counterGetter
  // this.counterGetter = function()
  // {
  //   return counter;
  // };
//going up by one each time the button is clicked
  // this.counterSetter = function()
  // {
  //   console.log( 'counterSetter working!' );
  //   // if (true) {
  //   //
  //   // }
  //   //   counter++;
  //
  //
  // };
//function that sends the request to the server(app.js) to get the HighFives
  this.getHighFives = function()
  {
  return (Math.floor(Math.random() * 10) + 1);
    };

this.numberGenerator = function()
{
  return (Math.floor(Math.random() * 10) + 1);
};// end of numberGenerator

});//ending HighFiveApp function
