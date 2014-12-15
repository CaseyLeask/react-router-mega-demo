/** @jsx React.DOM */

var React = require('react');
var Route = require('react-router').Route;

module.exports = (
  <Route name="root" path="/" handler={require('./handlers/Root')}>
    <Route name="foo" handler={require('./handlers/Foo')} />
    <Route name="bar" path="bar/:id" handler={require('./handlers/Bar')} />
  </Route>
);

