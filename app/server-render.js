/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Promise = require('when').Promise;
var fs = require('fs');
var indexHTML = fs.readFileSync(__dirname+'/index.html').toString();
var routes = require('./routes');

function renderApp(path) {
  var htmlRegex = /¡HTML!/;
  return new Promise(function(resolve, reject) {
    Router.run(routes, path, function (Handler, state) {
      var html = React.renderToString(<Handler />);
      resolve(indexHTML.replace(htmlRegex, html));
    });
  });
}

module.exports = renderApp;
