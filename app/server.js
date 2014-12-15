require('node-jsx').install();
require('./ENV');

var fs = require('fs');
var Router = require('react-router');

var serverRender = require('./server-render');

require('mach').serve(function (req, res) {
  switch (req.path) {
    case '/js/main.js':
      return fs.readFileSync(__dirname+'/../public/js/main.js');
    case '/js/style.css':
      return fs.readFileSync(__dirname+'/../public/js/style.css');
    case '/favicon.ico':
      return 'haha';
    default:
      // if (req.path.match(/^\/styles.css/))
      //   return fs.readFileSync(__dirname+'/assets/styles.css');
      return serverRender(req.path).catch(function(redirect) {
        if (redirect && redirect.to) {
          serverRender.redirect(redirect.to);
        } else {
          console.log("Error thrown for url: " + req.path + " " + redirect.toString());
        }
      });
  }
}, process.env.PORT || 5000);


