import React, { Component } from 'react';

import UserAppHeader from './UserAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserLanding extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="User-App">
          <UserAppHeader />

          <h1>Välkommen till Ageros Onboardingsida</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserLanding;
