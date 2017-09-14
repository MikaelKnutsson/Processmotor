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
import { List, ListItem } from 'material-ui/List';
import preload from './userData.json';
import SearchIcon from 'material-ui/svg-icons/action/search';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';

export default class AdminTable extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
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
                  <TableRowColumn style={{ backgroundColor: 'green' }}>
                    {user.it}
                  </TableRowColumn>
                  <TableRowColumn>{user.economy}</TableRowColumn>
                  <TableRowColumn>{user.consulant}</TableRowColumn>
                  <TableRowColumn>
                    <OpenInNew />
                  </TableRowColumn>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
