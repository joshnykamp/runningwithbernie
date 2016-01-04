var React = require('react');
var ReactDOM = require("react-dom");
var App = require("./components/App");
var Actions = require("./components/Actions");

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Actions source="/users" />, document.getElementById('actions'));