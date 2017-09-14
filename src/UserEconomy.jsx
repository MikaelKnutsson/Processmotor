import React from 'react';
import TextField from 'material-ui/TextField';
import UserAppBar from './UserAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  hr: {
    width: 350
  }
};

class UserEconomy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="User-App">
          <UserAppBar />
          <h1> Ekonomi </h1>
          <hr style={styles.hr} />
          <h3>Vänligen fyll i dina kontouppgifter</h3>
          <TextField
            type="number"
            hintText="xxxx xxxx xxxx xxxx"
            floatingLabelText="Kontonummer"
            floatingLabelFixed={true}
          />
          <br />
          <TextField hintText="Clearingnummer" />
          <br />
          <TextField hintText="Bank" />
          <br />
          <RaisedButton
            onClick={this.handleTouchTap}
            primary={true}
            label="Spara"
          />
          <br />
          <Snackbar
            open={this.state.open}
            message="Uppgifter sparade"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserEconomy;
