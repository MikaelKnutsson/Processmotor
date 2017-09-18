import React from 'react';
import UserAppBar from './UserAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  hr: {
    width: 350
  }
};

class UserIt extends React.Component {
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
          <h1> IT </h1>
          <hr style={styles.hr} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserIt;
