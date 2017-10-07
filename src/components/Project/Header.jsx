import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class ProjectHeader extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is ProjectHeader*]</div>
    );
  }
}

ProjectHeader.propTypes = {};
ProjectHeader.defaultProps = {};

export default ProjectHeader;
