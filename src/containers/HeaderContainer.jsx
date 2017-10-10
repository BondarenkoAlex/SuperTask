/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

import Header from '../components/Header';
import AddProjectVacancyContainer from './AddProjectVacancyContainer';

import { addProject } from '../actions';

class HeaderContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      isModalOpen: false,
    };
  }

  onAddProject() {
    this.updateState({
      isModalOpen: true,
    });
  }

  onCloseModal() {
    this.updateState({
      isModalOpen: false,
    });
  }

  onCreateProject(value) {
    this.onCloseModal();
    this.props.addProject(value);
  }

  updateState(payload) {
    this.setState({
      ...this.state,
      ...payload,
    });
  }

  render() {
    const { isModalOpen } = this.state;
    return ([
      <Header
        onAddProject={this.onAddProject}
        onChangeSearch={() => {}}
        onOnlyOpen={() => {}}
        key="header-container"
      />,
      isModalOpen && (
        <AddProjectVacancyContainer
          onSubmit={this.onCreateProject}
          onClose={this.onCloseModal}
          title="Новый проект"
          key="add-header-container"
        />),
    ]);
  }
}

HeaderContainer.propTypes = {
  addProject: PropTypes.func.isRequired,
};
HeaderContainer.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators({
    addProject,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
