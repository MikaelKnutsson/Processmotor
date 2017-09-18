import React, { Component } from 'react';
import AdminAppBar from './AdminAppBar.jsx';
import AdminAddButton from './AdminAddUser.jsx';
import Table from './AdminTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AdminLanding extends Component {
  props: User;
  render() {
    return (
      <MuiThemeProvider>
        <div className="Admin-App">
          <AdminAppBar />
          <Table />
          <hr />
          <AdminAddButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AdminLanding;
