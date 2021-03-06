import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import preload from './userData.json';
import Dialog from 'material-ui/Dialog';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import AdminCard from './AdminCard';

const styles = {
  tableDone: {
    backgroundColor: 'green'
  }
};

export default class AdminTable extends Component {
  state = {
    searchTerm: '',
    open: false
  };

  props: {
    users: Array<User>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <SearchIcon
            style={{
              position: 'absolute',
              right: 0,
              top: 15,
              width: 20,
              height: 20
            }}
          />
          <TextField
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </div>

        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Namn</TableHeaderColumn>
              <TableHeaderColumn>Startdatum</TableHeaderColumn>
              <TableHeaderColumn>IT</TableHeaderColumn>
              <TableHeaderColumn>Ekonomi</TableHeaderColumn>
              <TableHeaderColumn>Konsultprofil</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>

          <TableBody>
            {preload.users
              .filter(
                user =>
                  `${user.name} ${user.startDate}`
                    .toUpperCase()
                    .indexOf(this.state.searchTerm.toUpperCase()) >= 0
              )
              .map(user => (
                <TableRow key={user.name} {...user}>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>{user.startDate}</TableRowColumn>
                  <TableRowColumn style={styles.tableDone}>
                    {user.it}
                  </TableRowColumn>
                  <TableRowColumn style={{ backgroundColor: '#ff3333' }}>
                    {user.economy}
                  </TableRowColumn>
                  <TableRowColumn>{user.consulant}</TableRowColumn>
                  <TableRowColumn>
                    <OpenInNew onClick={this.handleOpen} />
                  </TableRowColumn>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <Dialog
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <AdminCard to={`/details/${this.props.imdbID}`} />
        </Dialog>
      </div>
    );
  }
}
