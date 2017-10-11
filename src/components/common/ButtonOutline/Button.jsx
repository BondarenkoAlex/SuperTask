/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function Button(props) {
  const {
    children,
    onClick,
    className,
  } = props;
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

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
Button.defaultProps = {};

export default Button;
