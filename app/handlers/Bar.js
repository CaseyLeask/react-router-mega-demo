/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <h1>{'Bar! ' + this.getParams().id}</h1>
    );
  }

});
