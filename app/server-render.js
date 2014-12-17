/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Promise = require('when').Promise;
var fs = require('fs');
var routes = require('./routes');

var htmlRegex = /¡HTML!/;

function renderApp(path) {
  var indexHTML = fs.readFileSync(__dirname+'/index.html').toString();

  return new Promise(function(resolve, reject) {
    var router = Router.create({
      routes: routes,
      location: path,
      onAbort: function defaultAbortHandler(abortReason, location) {
        reject(abortReason);
      }
    });

    router.run(function (Handler, state) {
      var html = React.renderToString(<Handler />);
      resolve(indexHTML.replace(htmlRegex, html));
    });
  });
}

module.exports = renderApp;

