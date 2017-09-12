import React, { Component } from 'react';
import './App.css';
import './components/Button.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AdminLanding from './AdminLanding.jsx';
import Landing from './Landing.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/adminLanding" component={AdminLanding} />
        </div>
      </Router>
    );
  }
}

export default App;
