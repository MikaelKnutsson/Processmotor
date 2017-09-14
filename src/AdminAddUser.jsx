import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';

const customContentStyle = {
  height: '100%',
  width: '25%'
};

export default class AdminAddUser extends React.Component {
  state = {
    open: false
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
        <FloatingActionButton onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          className="User-App"
          title="Lägg till medarbetare"
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
            <TextField hintText="Förnamn" floatingLabelText="Förnamn" />
            <br />
            <TextField hintText="Efternamn" floatingLabelText="Efternamn" />
            <br />
            <TextField
              hintText="Personnummer"
              floatingLabelText="Personnummer"
            />
            <br />
            <TextField hintText="E-mail" floatingLabelText="E-mail" />
            <br />
            <DatePicker floatingLabelText="Startdatum" hintText="Date Picker" />
            <br />
          </div>
        </Dialog>
      </div>
    );
  }
}
