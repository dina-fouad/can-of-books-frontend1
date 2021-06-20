import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>

        {isAuthenticated && <div>Hello {user.name}</div>}
        {isAuthenticated && <div>Email {user.email}</div>}
        {isAuthenticated && <img src={user.picture} alt=""/>} 
</>
    );
  }
}

        export default withAuth0(Profile);