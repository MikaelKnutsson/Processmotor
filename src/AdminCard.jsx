import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const style = {
  marginLeft: 20
};

class AdminCard extends Component {
  props: {
    user: User
  };

  render() {
    return (
      <Card>
        <Tabs>
          <Tab label="Information">
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              <h3>fsfl</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Tab>
          <Tab label="IT">
            <TextField
              hintText="First name"
              style={style}
              underlineShow={false}
            />
            <Divider />
            <TextField
              hintText="Middle name"
              style={style}
              underlineShow={false}
            />
            <Divider />
            <TextField
              hintText="Last name"
              style={style}
              underlineShow={false}
            />
            <Divider />
            <TextField
              hintText="Email address"
              style={style}
              underlineShow={false}
            />
            <Divider />
          </Tab>
          <Tab label="Ekonomi">
            <h3>blabla</h3>
          </Tab>
          <Tab label="HR">
            <h3>blabla</h3>
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

export default AdminCard;
