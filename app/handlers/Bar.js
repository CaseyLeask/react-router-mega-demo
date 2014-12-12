/** @jsx React.DOM */
var React = require('react');
var Promise = require('when');
var Router = require('react-router');

var Bar = module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <h1>{'Bar! ' + this.getParams().id}</h1>
    );
  }

});
