import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UserAppBar from './UserAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  marginLeft: 20
};

const UserEconomy = () => (
  <MuiThemeProvider>
    <div className="User-App">
      <UserAppBar />
      <h3>Vänligen fyll i dina kontouppgifter</h3>
      <TextField hintText="Kontonummer" />
      <br />
    </div>
  </MuiThemeProvider>
);

export default UserEconomy;
