import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import './style.scss';

class Modal extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.modalRoot = document.getElementById('modal-root');
    this.el = document.createElement('div');
    this.el.classList.add('modal-window');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element,
};
Modal.defaultProps = {
  children: null,
};

export default Modal;

