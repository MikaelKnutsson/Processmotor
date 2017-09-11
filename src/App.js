import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './components/Button.jsx';
import RaisedButton from './DialogExampleSimple.jsx';
import Table from './TableExampleControlled';

class App extends Component {
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

export default App;
