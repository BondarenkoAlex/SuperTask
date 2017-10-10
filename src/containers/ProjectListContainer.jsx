/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import Project from '../components/Project';
import AddProjectVacancyContainer from './AddProjectVacancyContainer';
import { addVacancy } from '../actions';

class ProjectListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.id = null;
    this.state = {
      isModalOpen: false,
    };
  }

  resetId() {
    this.id = null;
  }

  onAdd(id) {
    debugger;
    this.id = id;
    this.updateState({
      isModalOpen: true,
    });
  }

  onDelete(id) {
    debugger;
  }

  onOpenClose(id) {
    debugger;
  }

  onCloseModal() {
    this.updateState({
      isModalOpen: false,
    });
  }

  onCreateVacancy(value) {
    const id = this.id;
    this.resetId();
    this.onCloseModal();
    this.props.addVacancy(id, value);
  }

  updateState(payload) {
    this.setState({
      ...this.state,
      ...payload,
    });
  }

  render() {
    const { projects, vacancies } = this.props;
    const { isModalOpen } = this.state;
    return ([
      ...Object.keys(projects).map((key) => {
        const {
          id,
          title,
          isClosed,
          items,
        } = projects[key];
        const vacs = items.map(k => vacancies[k]);
        const onAdd = () => { this.onAdd(id); };
        const onDelete = () => { this.onDelete(id); };
        const onOpenClose = () => { this.onOpenClose(id); };
        return (
          <Project
            key={id}
            vacancies={vacs}
            isClosed={isClosed}
            title={title}
            onAdd={onAdd}
            onDelete={onDelete}
            onOpenClose={onOpenClose}
          />
        );
      }),
      isModalOpen && (
        <AddProjectVacancyContainer
          onSubmit={this.onCreateVacancy}
          onClose={this.onCloseModal}
          title="Новая вакансия"
          key="add-header-container"
        />),
    ]);
  }
}

ProjectListContainer.propTypes = {
  projects: PropTypes.object.isRequired,
  vacancies: PropTypes.object.isRequired,
  addVacancy: PropTypes.func.isRequired,
};
ProjectListContainer.defaultProps = {};

const mapStateToProps = state => ({
  projects: state.projects,
  vacancies: state.vacancies,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addVacancy,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
