import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class SideButtons extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is SideButtons*]</div>
    );
  }
}

SideButtons.propTypes = {};
SideButtons.defaultProps = {};

export default SideButtons;
