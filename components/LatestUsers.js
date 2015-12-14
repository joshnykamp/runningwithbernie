var React = require('react');

var LatestUsers = React.createClass({
    getDefaultProps() {
        //Do an ajax call for that past two users that signed up if there is no connection.
        return {
            users: [
                { id: 1, name: 'Josh', city: 'Lakewood' },
                { id: 2, name: 'Bill', city: 'Denver' },
            ], 
            status: 'test'
        }
    }, 
    render() {
        return (
            <div className="row">
                {this.props.users.map(function(user) {
                    return(
                        <div key={user.id} className="col-sm-6">
                            <p>{user.name}</p>
                            <p>{user.city}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
});

module.exports = LatestUsers;