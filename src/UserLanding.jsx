import React, { Component } from 'react';

import UserAppHeader from './UserAppBar';
import UserLandingStepper from './UserLandingStepper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserLanding extends Component {
  state = {
    date: new Date(Date.now())
  };
  render(props) {
    return (
      <MuiThemeProvider>
        <div className="User-App">
          <UserAppHeader />

          <h1>Välkommen till Ageros Onboardingsida</h1>
          <br />
          <h3>Startdatum: 2017-10-14</h3>

          <UserLandingStepper />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserLanding;
