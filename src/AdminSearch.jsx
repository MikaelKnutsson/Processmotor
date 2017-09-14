import React, { Component } from 'react';
import AdminTable from './AdminTable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import preload from './userData';

class AdminSearch extends Component {
  state = {
    searchTerm: 'fsfsf'
  };
  props: {
    users: Array<User>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <TextField
          searchTerm={this.state.searchTerm}
          showSearch
          onChange={this.handleSearchTermChange}
          hintText="Search"
        />
        <div>
          {preload.users
            .filter(
              user =>
                `${user.name} ${user.startDate}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(user => <TableRow key={user.imdbID} {...user} />)}
        </div>
      </div>
    );
  }
}

export default AdminSearch;
