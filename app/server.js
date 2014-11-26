require('node-jsx').install();
require('./ENV');

var fs = require('fs');
var Router = require('react-router');
var routes = require('./routes.js');
var mainJS = fs.readFileSync(__dirname+'/../public/js/main.js');
var mainCSS = fs.readFileSync(__dirname+'/../public/js/style.css');
var serverRender = require('./server-render');

require('mach').serve(function (req, res) {
  switch (req.path) {
    case '/js/main.js':
      return mainJS;
    case '/js/style.css':
      return mainCSS;
    case '/favicon.ico':
      return 'haha';
    default:
      // if (req.path.match(/^\/styles.css/))
      //   return fs.readFileSync(__dirname+'/assets/styles.css');
      return serverRender(req.path).then(null, function(redirect) {
        res.redirect(redirect.to);
      });
  }
}, process.env.PORT || 5000);


