var React = require("react");
var io = require("socket.io-client");
var LatestUsers = require("./LatestUsers");

var App = React.createClass({
    componentWillMount() {
        this.socket = io("https://runningwithbernie-joshnykamp2.c9users.io");
        this.socket.on('connect', this.connect);
    },
    connect() {
        console.log("connected: ", this.socket.id);
    },
    render() {
        return (
            <div>
                <LatestUsers source="users/2" />
            </div>
        );
    }
    
});

module.exports = App;