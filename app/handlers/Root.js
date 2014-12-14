/** @jsx React.DOM */
var React = require('react');
var Promise = require('when');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Root = module.exports = React.createClass({
  render: function() {
    return (
      <RouteHandler />
    );
  }
});
