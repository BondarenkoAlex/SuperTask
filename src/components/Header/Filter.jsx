import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class Filter extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is Search*]</div>
    );
  }
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
