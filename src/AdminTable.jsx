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

import OpenInNew from 'material-ui/svg-icons/action/open-in-new';

export default class AdminTable extends Component {
  state = {
    selected: []
  };
  props: {
    props: Show
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows,
      searchTerm: ''
    });
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <h1>{this.state.searchTerm}</h1>
        <TextField
          searchTerm={this.state.searchTerm}
          showSearch
          onChange={this.handleSearchTermChange}
          hintText="Search"
        />
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
              /*  .filter(user =>
                `${user.name} ${user.startDate}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase() >= 0)
              ) */
              .map(user => (
                <TableRow key={user.name} {...user}>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>{user.startDate}</TableRowColumn>
                  <TableRowColumn>{user.it}</TableRowColumn>
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
