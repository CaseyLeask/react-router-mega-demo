/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route name="root" path="/" handler={require('./handlers/Root')} />
);

