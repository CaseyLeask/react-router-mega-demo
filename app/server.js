require('node-jsx').install();
require('./ENV');

var fs = require('fs');
var Router = require('react-router');

var serverRender = require('./server-render');

require('mach').serve(function (connection) {
  switch (connection.path) {
    case '/js/main.js':
      return fs.readFileSync(__dirname+'/../public/js/main.js');
    case '/js/style.css':
      return fs.readFileSync(__dirname+'/../public/js/style.css');
    case '/favicon.ico':
      return 'haha';
    default:
      // if (req.path.match(/^\/styles.css/))
      //   return fs.readFileSync(__dirname+'/assets/styles.css');
      return serverRender(connection.path).catch(function(redirect) {
        if (redirect && redirect.to) {
          var newUrl = connection.host ? (connection.protocol + '//' + connection.host + redirect.to) : redirect.to;
          connection.redirect(301, newUrl)
        } else {
          console.log("Error thrown for url: " + connection.path + " " + redirect.stack);
        }
      });
  }
}, process.env.PORT || 5000);

