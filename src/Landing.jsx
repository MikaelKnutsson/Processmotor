import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Social from 'material-ui/svg-icons/social/people';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    margin: 12
  },
  div: {
    marginLeft: 520,
    marginTop: 200
  },
  h1: {
    margin: 35
  }
};

const Landing = () => (
  <MuiThemeProvider>
    <div className="landing" style={styles.div}>
      <h1 style={styles.h1}>Agero Onboarding</h1>
      <Link to="/AdminLanding">
        <RaisedButton
          label="Admin-sida"
          labelPosition="before"
          primary={true}
          icon={<ActionAndroid />}
          style={styles.button}
        />
      </Link>
      <Link to="/UserLanding">
        <RaisedButton
          label="Medarbetare"
          labelPosition="before"
          primary={true}
          icon={<Social />}
          style={styles.button}
        />
      </Link>
    </div>
  </MuiThemeProvider>
);

export default Landing;
