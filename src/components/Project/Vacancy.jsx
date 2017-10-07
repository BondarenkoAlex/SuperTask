import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class ProjectVacancy extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is ProjectVacancy*]</div>
    );
  }
}

ProjectVacancy.propTypes = {};
ProjectVacancy.defaultProps = {};

export default ProjectVacancy;
