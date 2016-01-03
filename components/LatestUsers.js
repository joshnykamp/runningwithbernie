var React = require('react');

var LatestUsers = React.createClass({
    getInitialState() {
            return { loading: true, error: false, name: null };
    },
    componentDidMount: function() {
        $.get(this.props.source, function(result) {
            console.log('result', result.data);
            if (this.isMounted()) {
                console.log('set state fired');
                this.setState({
                users : result.data,
                loading: false
        })
      }
    }.bind(this));
  },
   /*getDefaultProps() {
        //Do an ajax call for that past two users that signed up if there is no connection.
        return {
            users: [
                { id: 1, username: 'Josh' },
                { id: 2, username: 'Bill' },
            ], 
            status: 'test'
        }
    },*/
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div className="row">
                {this.state.users.map(function(user) {
                    return(
                        <div key={user.id} className="col-sm-6">
                            <p>{user.username}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
});

module.exports = LatestUsers;