import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Button extends React.Component {
  render() {
    console.log(Button);

    return (
      <button
        className="btn btn-default"
        label="Hallooo"
        color="#841584"
        style={buttonStyle}
        onClick={this.props.handleClick}
      >
        Hey
      </button>
    );
  }
}

export default Button;
