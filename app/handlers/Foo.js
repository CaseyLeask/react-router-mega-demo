/** @jsx React.DOM */
var React = require('react');
var Promise = require('when');

var Foo = module.exports = React.createClass({

  render: function() {
    return (
      <h1>{'Foo!'}</h1>
    );
  }

});
