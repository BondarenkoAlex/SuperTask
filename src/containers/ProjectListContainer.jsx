/* eslint-disable react/forbid-prop-types,react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import ProjectList from '../components/ProjectList';
import AddProjectVacancyContainer from './AddProjectVacancyContainer';
import DeleteProjectVacancy from '../components/common/DeleteProjectVacancy';
import {
  addVacancy,
  openCloseProject,
  removeProject,
} from '../actions';
import { projectSelector } from '../selectors';

class ProjectListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.id = null;
    this.state = {
      isModalOpen: false,
      isModalOpenDelete: false,
    };
  }

  onAdd(id) {
    this.id = id;
    this.updateState({
      isModalOpen: true,
    });
  }

  onDelete(id) {
    this.id = id;
    this.updateState({
      isModalOpenDelete: true,
    });
  }

  onOpenClose(id) {
    this.props.openCloseProject(id);
  }

  onCloseModal() {
    this.updateState({
      isModalOpen: false,
      isModalOpenDelete: false,
    });
  }

  onCreateVacancy(value) {
    const id = this.id;
    this.resetId();
    this.onCloseModal();
    this.props.addVacancy(id, value);
  }

  onDeleteSubmit() {
    const id = this.id;
    this.resetId();
    this.onCloseModal();
    this.props.removeProject(id);
  }

  resetId() {
    this.id = null;
  }

  updateState(payload) {
    this.setState({
      ...payload,
    });
  }

  render() {
    const {
      projects,
      vacancies,      
      titleModal,
      // eslint-disable-next-line react/prop-types
      nameButtonModal,
    } = this.props;
    const { isModalOpen, isModalOpenDelete } = this.state;
    return ([
      <ProjectList
        projects={projects}
        vacancies={vacancies}
        onDelete={this.onDelete}
        onOpenClose={this.onOpenClose}
        onAdd={this.onAdd}
        onClickHeader={this.onClickHeader}
        key="project-list"
      />,
      isModalOpen && (
        <AddProjectVacancyContainer
          onSubmit={this.onCreateVacancy}
          onClose={this.onCloseModal}
          title="Новая вакансия"
          key="add-header-container"
        />),
      isModalOpenDelete && (
        <DeleteProjectVacancy
          title={`${titleModal} "${projects[this.id].title}"`}
          name={nameButtonModal}
          onSubmit={this.onDeleteSubmit}
          onClose={this.onCloseModal}
          key="modal-delete"
        />),
    ]);
  }
}

ProjectListContainer.propTypes = {
  projects: PropTypes.object.isRequired,
  vacancies: PropTypes.object.isRequired,
  addVacancy: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
  openCloseProject: PropTypes.func.isRequired,
  isOnlyOpen: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  searchValue: PropTypes.string,
};
ProjectListContainer.defaultProps = {
  titleModal: 'Удалить проект',
  nameButtonModal: 'Да',
};

const mapStateToProps = (state, ownProps) => {
  const projects = projectSelector(state, ownProps);
  return ({
    projects,
    vacancies: state.vacancies,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addVacancy,
    removeProject,
    openCloseProject,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
