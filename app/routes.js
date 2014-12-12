/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

module.exports = (
  <Route name="root" path="/" handler={require('./handlers/Root')}>
    <Route name="foo" handler={require('./handlers/Foo')} />
    <Route name="bar" path="bar/:id" handler={require('./handlers/Bar')} />
  </Route>
);

