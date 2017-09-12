import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from './DialogExampleSimple.jsx';
import Table from './TableExampleControlled';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AdminLanding extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Agero Onboarding</h2>
          </div>
          <Table />
          <RaisedButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AdminLanding;
