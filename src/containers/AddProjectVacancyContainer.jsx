/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import AddProjectVacancy from '../components/common/AddProjectVacancy';
import DialogWindow from '../components/common/DialogWindow';
import Modal from '../components/Modal';

class AddProjectVacancyContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      value: '',
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyEsc);
  }

  onKeyEsc(event) {
    const { onClose } = this.props;
    let keyCode;
    if (event.which === null) { // IE
      keyCode = event.keyCode;
    }

    if (event.which !== 0) { // все кроме IE
      keyCode = event.keyCode;
    }

    if (keyCode === 27) {
      // esc
      onClose();
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
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
          <AddProjectVacancy
            onSubmit={this.onSubmit}
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
