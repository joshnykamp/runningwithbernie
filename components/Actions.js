var React = require('react');

//for now this will be the global feed for the index page
var Actions = React.createClass({
   getInitialState() {
      return { loading: true, error: false, name: null };
   },
   componentDidMount: function() {
      $.get(this.props.source, function(result) {
         console.log(result);
         if(this.isMounted()) {
            this.setState({
               users : result.data,
               loading: false
            });
         }         
      }.bind(this));
   }, 
   render() {
      if(this.state.loading) {
         return <div>Loading...</div>
      }
       return (
          <div>
            <h3>Latest Actions</h3>
            <ul>
               {this.state.users.map(function(user) {
                  return (
                     <li key={user._id}>{user.username} Just joined in {user.zipcode}</li>
                  )
               })}
            </ul>
          </div>
       );
   } 
   
});

module.exports = Actions;