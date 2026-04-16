const $ = require('jquery');
const str = require('./constant');

const App = function() {
  $('body').html('<h1>' + str + '</h1>');
  // console.log(str);
};

new App();
