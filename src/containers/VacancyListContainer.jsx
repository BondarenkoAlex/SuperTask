/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import Vacancy from '../components/Vacancy';
import DeleteProjectVacancy from '../components/components/DeleteProjectVacancy';
import {
  removeVacancy,
  openCloseVacancies,
} from '../actions';

class VacancyListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.id = null;
    this.state = {
      isModalOpen: false,
    };
  }

  onOpenClose(id) {
    this.props.openCloseVacancies(id);
  }

  onCloseModal() {
    this.updateState({
      isModalOpen: false,
    });
  }

  onDelete(id) {
    this.id = id;
    this.updateState({
      isModalOpen: true,
    });
  }

  onDeleteSubmit(e) {
    e.preventDefault();
    this.onCloseModal();
    const vacancy = this.vacancy;
    this.resetVacancy();
    this.props.removeVacancy(vacancy);
  }

  resetVacancy() {
    this.id = null;
  }

  updateState(payload) {
    this.setState({
      ...this.state,
      ...payload,
    });
  }

  render() {
    const { isModalOpen } = this.state;
    const {
      vacancies,
      // eslint-disable-next-line react/prop-types
      titleModal,
      // eslint-disable-next-line react/prop-types
      nameButtonModal,
    } = this.props;
    return ([
      ...Object.keys(vacancies).map((key) => {
        const vacancy = vacancies[key];
        const {
          id,
          title,
          isClosed,
        } = vacancy;
        const onDelete = () => { this.onDelete(id); };
        const onOpenClose = () => { this.onOpenClose(id); };
        return (
          <Vacancy
            key={id}
            isClosed={isClosed}
            title={title}
            onOpenClose={onOpenClose}
            onDelete={onDelete}
          />
        );
      }),
      isModalOpen && (
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

VacancyListContainer.propTypes = {
  vacancies: PropTypes.array.isRequired,
  removeVacancy: PropTypes.func.isRequired,
  openCloseVacancies: PropTypes.func.isRequired,
};
VacancyListContainer.defaultProps = {
  titleModal: 'Удалить вакансию',
  nameButtonModal: 'Да',
};

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeVacancy,
    openCloseVacancies,
  }, dispatch)
);

export default connect(/* mapStateToProps */ null, mapDispatchToProps)(VacancyListContainer);
