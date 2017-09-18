import React, { Component } from 'react';
import './App.css';
import './components/Button.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminLanding from './AdminLanding.jsx';
import UserLanding from './UserLanding.jsx';
import Landing from './Landing.jsx';
import UserEconomy from './UserEconomy.jsx';
import UserIt from './UserIt.jsx';
import AdminCard from './AdminCard.jsx';
import preload from './userData.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route
            path="/adminLanding"
            component={props => (
              <AdminLanding users={preload.users} {...props} />
            )}
          />

          <Route
            path="/details/:id"
            component={(props: { match: Match }) => {
              const selectedShow = preload.users.find(
                user => props.match.params.id === user.name
              );
              return <AdminCard show={selectedShow} {...props} />;
            }}
          />
          <Route path="/userLanding" component={UserLanding} />
          <Route path="/userEconomy" component={UserEconomy} />
          <Route path="/userIt" component={UserIt} />
          <Route
            path="adminCard"
            component={props => <AdminCard users={preload.users} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
