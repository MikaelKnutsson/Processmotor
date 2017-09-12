import React, { Component } from 'react';
import './App.css';
import './components/Button.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminLanding from './AdminLanding.jsx';
import UserLanding from './UserLanding.jsx';
import Landing from './Landing.jsx';
import UserEconomy from './UserEconomy.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/adminLanding" component={AdminLanding} />
          <Route path="/userLanding" component={UserLanding} />
          <Route path="/userEconomy" component={UserEconomy} />
        </div>
      </Router>
    );
  }
}

export default App;
