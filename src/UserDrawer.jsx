import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import OpenMenuButton from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

class UserDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <IconButton onClick={this.handleToggle}>
          <OpenMenuButton />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          containerStyle={{ backgroundColor: '#00BCD4' }}
        >
          <Link to="/userLanding">
            <MenuItem style={{ color: 'white' }}> Hem </MenuItem>
          </Link>
          <Divider />
          <Link to="/userEconomy">
            <MenuItem onClick={this.handleClose} style={{ color: 'white' }}>
              Ekonomi
            </MenuItem>
          </Link>
          <MenuItem onClick={this.handleClose} style={{ color: 'white' }}>
            IT-alternativ
          </MenuItem>
          <MenuItem onClick={this.handleClose} style={{ color: 'white' }}>
            Konsultprofil
          </MenuItem>
          <MenuItem onClick={this.handleClose} style={{ color: 'white' }}>
            Övrigt
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default UserDrawer;
