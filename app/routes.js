/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


module.exports = (
  <Route handler={require('./handlers/Layout')}>
    <Route name="foo" handler={require('./handlers/Foo')} />
    <Route name="bar" path="bar/:id" handler={require('./handlers/Bar')} />
    <DefaultRoute name="home" handler={require('./handlers/Home')} />
  </Route>
);

