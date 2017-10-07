import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class Project extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is Project*]</div>
    );
  }
}

Project.propTypes = {};
Project.defaultProps = {};

export default Project;
