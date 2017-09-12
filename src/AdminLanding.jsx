import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminAppBar from './AdminAppBar.jsx';
import RaisedButton from './DialogExampleSimple.jsx';
import Table from './TableExampleControlled';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AdminLanding extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Admin-App">
          <AdminAppBar />
          <Table />
          <RaisedButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AdminLanding;
