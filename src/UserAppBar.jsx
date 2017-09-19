import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import UserDrawer from './UserDrawer.jsx';
import { Link } from 'react-router-dom';

const style = {
  textDecoration: 'none'
};

class UserAppBar extends Component {
  state = {
    logged: true
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <AppBar
          title="Onboarding Agero"
          iconElementLeft={<UserDrawer economy="ekonomi" />}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <Link to="/" style={style}>
                <MenuItem primaryText="Sign out" />
              </Link>
            </IconMenu>
          }
        />
      </div>
    );
  }
}

export default UserAppBar;
