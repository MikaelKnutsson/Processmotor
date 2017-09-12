import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserAppHeader from './UserAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserLanding extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="User-App">
          <UserAppHeader />

          <p>Heeej</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserLanding;
