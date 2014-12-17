/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

module.exports = (
  <Route handler={require('./handlers/Layout')}>
    <Redirect from="foo" to="/bar/3" />
    <Route name="bar" path="bar/:id" handler={require('./handlers/Bar')} />
    <DefaultRoute name="home" handler={require('./handlers/Home')} />
  </Route>
);

