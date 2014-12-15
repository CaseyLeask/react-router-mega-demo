/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Header = require('./Header');
var Footer = require('./Footer');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="wrapper">
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});
