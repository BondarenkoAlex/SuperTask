/* eslint-disable react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Button extends PureComponent {
  render() {
    const {
      children,
      onClick,
      className,
    } = this.props;
    const stl = (className !== undefined)
      ? className
      : style.buttonCommon;
    return (
      <button
        className={stl}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
Button.defaultProps = {};

export default Button;
