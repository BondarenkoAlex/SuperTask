import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class DialogWindow extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is DialogWindow*]</div>
    );
  }
}

DialogWindow.propTypes = {};
DialogWindow.defaultProps = {};

export default DialogWindow;
