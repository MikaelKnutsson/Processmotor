import React, { Component } from 'react';
import AdminAppBar from './AdminAppBar.jsx';
import RaisedButton from './AdminAddUser.jsx';
import Table from './AdminTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AdminSearch from './AdminSearch';

class AdminLanding extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Admin-App">
          <AdminAppBar />
          <AdminSearch />
          <Table />
          <RaisedButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AdminLanding;
