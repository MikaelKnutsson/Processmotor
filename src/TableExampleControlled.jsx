import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import OpenInNew from 'material-ui/svg-icons/action/open-in-new';

export default class TableExampleControlled extends Component {
  state = {
    selected: [1]
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  render() {
    return (
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
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>2017-09-23</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>
              <OpenInNew />
            </TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>Randal White</TableRowColumn>

            <TableRowColumn>2017-09-23</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>
              <OpenInNew />
            </TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>

            <TableRowColumn>2017-09-23</TableRowColumn>
            <TableRowColumn
              style={{
                backgroundColor: '#00C853',
                color: 'white'
              }}
            >
              Employed
            </TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>
              <OpenInNew />
            </TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>Steve Brown</TableRowColumn>

            <TableRowColumn>2017-09-23</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>
              <OpenInNew />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
