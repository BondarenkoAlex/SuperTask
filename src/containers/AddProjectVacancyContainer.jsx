import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import ProjectAdd from '../components/components/ProjectAdd';
import DialogWindow from '../components/components/DialogWindow';
import Modal from '../components/Modal';

class AddProjectVacancyContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      value,
    });
  }

  onSubmit() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);
  }

  render() {
    const { onClose, title } = this.props;
    return (
      <Modal>
        <DialogWindow
          onClose={onClose}
          title={title}
        >
          <ProjectAdd
            onCreate={this.onSubmit}
            onChangeName={this.onChange}
            value={this.state.value}
            placeholder={title}
          />
        </DialogWindow>
      </Modal>
    );
  }
}

AddProjectVacancyContainer.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
AddProjectVacancyContainer.defaultProps = {};

export default AddProjectVacancyContainer;
