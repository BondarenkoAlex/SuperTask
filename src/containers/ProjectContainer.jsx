/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import Project from '../components/Project';

class ProjectContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      isToogle: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { vacancies: nextVacancies } = nextProps;
    const { vacancies } = this.props;
    const { isToogle } = this.state;
    if (vacancies.length === 0 && nextVacancies.length > 0 && !isToogle) {
      this.setState({
        isToogle: true,
      });
    }
  }

  onClickHeader() {
    this.setState(prevState => ({
      isToogle: !prevState.isToogle,
    }));
  }

  render() {
    const {
      vacancies,
      isClosed,
      title,
      onAdd,
      onDelete,
      onOpenClose,
    } = this.props;
    return (
      <Project
        vacancies={vacancies}
        isClosed={isClosed}
        title={title}
        onAdd={onAdd}
        onDelete={onDelete}
        onOpenClose={onOpenClose}
        onClickHeader={this.onClickHeader}
        isToogle={this.state.isToogle}
      />
    );
  }
}

ProjectContainer.propTypes = {
  vacancies: PropTypes.array.isRequired,
  isClosed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenClose: PropTypes.func.isRequired,
};
ProjectContainer.defaultProps = {};

export default ProjectContainer;
