/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import Project from '../components/Project';
import AddProjectVacancyContainer from './AddProjectVacancyContainer';
import DeleteProjectVacancy from '../components/components/DeleteProjectVacancy';
import {
  addVacancy,
  removeProject,
  openCloseProject,
} from '../actions';

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
      ...this.state,
      ...payload,
    });
  }

  render() {
    const { projects, vacancies, titleModal, nameButtonModal } = this.props;
    const { isModalOpen, isModalOpenDelete } = this.state;
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
      isModalOpenDelete && (
        <DeleteProjectVacancy
          title={titleModal}
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
};
ProjectListContainer.defaultProps = {
  titleModal: 'Удалить проект',
  nameButtonModal: 'Да',
};

const mapStateToProps = state => ({
  projects: state.projects,
  vacancies: state.vacancies,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addVacancy,
    removeProject,
    openCloseProject,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
